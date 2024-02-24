import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { Active, Prisma } from '@prisma/client';

@Injectable()
export class ActiveService {
  constructor(private prisma: PrismaService) {}

  /** 创建活动 */
  createActive(data: Prisma.ActiveCreateInput): Promise<Active> {
    return this.prisma.active.create({ data });
  }

  /** 删除活动 */
  deleteActive(where: Prisma.ActiveWhereUniqueInput): Promise<Active> {
    return this.prisma.active.delete({ where });
  }

  /** 更新活动 */
  updateActive(params: { where: Prisma.ActiveWhereUniqueInput; data: Prisma.ActiveUpdateInput }): Promise<Active> {
    const { where, data } = params;
    return this.prisma.active.update({
      where,
      data,
    });
  }

  /** 查询活动详情 */
  active(where: Prisma.ActiveWhereUniqueInput): Promise<Active> {
    return this.prisma.active.findUnique({ where });
  }

  /** 查询活动列表 */
  actives(params: {
    where?: Prisma.ActiveWhereInput;
    orderBy?: Prisma.ActiveOrderByWithRelationInput;
    take?: number;
    skip?: number;
    cursor?: Prisma.ActiveWhereUniqueInput;
  }): Promise<Active[]> {
    const { where, orderBy, take, skip, cursor } = params;
    return this.prisma.active.findMany({ where, orderBy, take, skip, cursor });
  }

  /** 总数 */
  count(params: {
    where?: Prisma.ActiveWhereInput;
    orderBy?: Prisma.ActiveOrderByWithRelationInput;
    take?: number;
    skip?: number;
    cursor?: Prisma.ActiveWhereUniqueInput;
  }) {
    const { where, orderBy, take, skip, cursor } = params;
    return this.prisma.active.count({ where, orderBy, take, skip, cursor });
  }
}
