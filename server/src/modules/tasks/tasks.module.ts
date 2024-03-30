import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { LocationJob } from './jobs/location';
import { Logger } from '@nestjs/common';

@Module({
  providers: [LocationJob, Logger],
  controllers: [TasksController],
})
export class TasksModule {}
