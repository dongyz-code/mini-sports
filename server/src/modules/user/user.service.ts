import { Injectable, Param } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { request } from 'src/utils';
import { WeixinLoginResponse } from 'src/types';
import { WEIXIN_URL } from 'src/constants';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async getUser(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
      select: {
        user_id: true,
        username: true,
        email: true,
        avatar: true,
        weixin: true,
        gender: true,
        level: true,
        phone: true,
        weight: true,
        height: true,
      },
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  /** 查询微信用户 */
  async getWinxinUser(param: Prisma.WeixinUserWhereUniqueInput) {
    return this.prisma.weixinUser.findUnique({
      where: param,
    });
  }

  /** 生成token */
  async generateToken(user: Pick<User, 'user_id' | 'username'>) {
    const payload = { sub: user.user_id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  /** 解析token */
  async parseToken(token: string) {
    return this.jwtService.verify(token);
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async updateUser(params: { where: Prisma.UserWhereUniqueInput; data: Prisma.UserUpdateInput }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }

  async getWeixinOpenId(code: string) {
    const app_id = this.configService.get('APP_ID');
    const app_secret = this.configService.get('APP_SECRET');

    const res = await request.get<WeixinLoginResponse>(WEIXIN_URL.GET_OPEN_ID, {
      params: {
        appid: app_id,
        secret: app_secret,
        js_code: code,
        grant_type: 'authorization_code',
      },
    });
    return res.data;
  }
}
