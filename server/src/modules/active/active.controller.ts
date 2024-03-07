import {
  Controller,
  Headers,
  Header,
  Get,
  Post,
  Param,
  Query,
  Body,
  Put,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ActiveService } from './active.service';
import { Active as ActiveModel, Prisma } from '@prisma/client';
import { UserId } from 'src/common/decorators';
import { CreateActiveDto } from './dto/CreateActive.dto';

@Controller()
export class ActiveController {
  constructor(private readonly activeService: ActiveService) {}

  @Get('active/:id')
  async getActiveById(@Param('id') id: string): Promise<ActiveModel> {
    return this.activeService.active({
      id: Number(id),
    });
  }

  @Get('actives')
  async getActives(
    @Query() query: Record<string, string>,
    @Headers() header: Record<string, any>,
    @Headers('accept-encoding') acceptEncoding: string,
  ) {
    console.log('query', query);
    console.log('header', header);
    console.log('acceptEncoding', acceptEncoding);
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    return '999';
  }

  @Post('active')
  async createActive(@Body() body: CreateActiveDto, @UserId() user_id: string) {
    const { address, ...active } = body;

    return this.activeService.createActive({
      organizer_type: 'people',
      ...active,
      CreateBy: {
        connect: {
          user_id: user_id,
        },
      },
      Address: {
        create: {
          ...address,
        },
      },
    });
  }

  @Put('active')
  async updateActive(@Body() body: ActiveModel) {
    return;
  }

  @Delete('active')
  async deleteActive(@Body() body: ActiveModel) {
    return this.activeService.deleteActive({
      id: body.id,
    });
  }
}
