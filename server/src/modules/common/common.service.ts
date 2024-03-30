import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma/prisma.service';

@Injectable()
export class CommonService {
  constructor(private readonly prisma: PrismaService) {}
  async findAllLocations() {
    return this.prisma.chinaLocation.findMany();
  }
}
