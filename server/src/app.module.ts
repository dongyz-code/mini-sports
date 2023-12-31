import { Module } from '@nestjs/common';
import { PrismaModule } from './db';
import { ActiveModule } from './modules/active/active.module';

@Module({
  imports: [ActiveModule, PrismaModule],
})
export class AppModule {}
