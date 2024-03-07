import { Controller, Get, Param, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { Public } from 'src/common/decorators';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('system')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post('login')
  async weixinLogin(@Body() body: { code: string }) {
    const { openid } = await this.userService.getWeixinOpenId(body.code);

    const user = await this.userService.getUser({
      open_id: openid,
    });

    if (!user) {
      throw new HttpException('用户不存在', HttpStatus.FORBIDDEN);
    }

    const { access_token } = await this.userService.generateToken({
      user_id: user.user_id,
      username: user.username,
    });
    return {
      access_token,
      user,
    };
  }

  @Public()
  @Post('/register')
  async register(@Body() body: CreateUserDto) {
    const { code, ...user_info } = body;
    const now = new Date();
    const { openid, session_key, unionid } = await this.userService.getWeixinOpenId(code);
    const user = await this.userService.createUser({
      ...user_info,
      WeixinUser: {
        create: {
          open_id: openid,
          session_key,
          unionid,
          session_key_time: now,
        },
      },
    });

    const access_token = await this.userService.generateToken({
      user_id: user.user_id,
      username: user.username,
    });

    return {
      access_token,
      user,
    };
  }
}
