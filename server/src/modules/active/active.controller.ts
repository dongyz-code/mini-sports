import { Controller, Get, Post, Param, Query, Body, Put, Delete } from '@nestjs/common';
import { ActiveService } from './active.service';
import { Active as ActiveModel } from '@prisma/client';

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
  async getActives(@Query() query: any) {
    console.log('query', query);
    return '999';
  }

  @Post('active')
  async createActive(@Body() body: ActiveModel) {
    return;
  }

  @Put('active')
  async updateActive(@Body() body: ActiveModel) {
    return;
  }
}
