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

@Controller()
export class ActiveController {
  constructor(private readonly activeService: ActiveService) {}

  @Get('active/:id')
  async getActiveById(@Param('id') id: string): Promise<ActiveModel> {
    return this.activeService.active({
      id: Number(id),
    });
  }

  @Header('a', 'b')
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
  async createActive(@Body() body: Prisma.ActiveCreateInput) {
    console.log(body);
    return this.activeService.createActive(body);
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
