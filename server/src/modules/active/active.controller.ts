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
import { UpdateActiveDto } from './dto/UpdateActive.dto';
import { GetActivesDto } from './dto/GetActives.dto';

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
  async getActives(@Query() query: GetActivesDto) {
    const whereInput: Prisma.ActiveWhereInput = {};
    const orderInput: Prisma.ActiveOrderByWithRelationInput = {
      create_time: 'desc',
    };

    query.title = query.title.trim();
    if (query.title) {
      whereInput.title = {
        contains: query.title,
      };
    }

    if (query.date) {
      whereInput.active_date = {
        has: query.date,
      };
    }

    if (query.sport_type) {
      whereInput.sport_type = query.sport_type;
    }

    if (query.city) {
      whereInput.Address.city = query.city;
    }

    if (query.district) {
      whereInput.Address.district = query.district;
    }

    // if (query.sort) {
    // }

    const { page = '1', size = '20' } = query;
    const take = Number(size);
    const skip = (Number(page) - 1) * take;
    return this.activeService.actives({
      where: whereInput,
      orderBy: orderInput,
      take: take,
      skip: skip,
    });
  }

  @Post('active')
  async createActive(@Body() body: CreateActiveDto, @UserId() user_id: string) {
    const { address, ...active } = body;

    return this.activeService.createActive({
      organizer_type: 'people',
      ...active,
      sport_type: 'ping_pang',
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
  async updateActive(@Body() body: UpdateActiveDto, @UserId() user_id: string) {
    const { id, address, ...active } = body;
    return this.activeService.updateActive({
      where: {
        id: Number(id),
      },
      data: {
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
      },
    });
  }

  @Delete('active/:id')
  async deleteActive(@Param() id: string) {
    return this.activeService.deleteActive({
      id: Number(id),
    });
  }
}
