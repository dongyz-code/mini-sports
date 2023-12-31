import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller('system')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user/:id')
  async getPostById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.user({ id: Number(id) });
  }
}
