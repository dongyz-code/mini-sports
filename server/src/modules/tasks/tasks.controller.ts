import { Controller, Get } from '@nestjs/common';
import { LocationJob } from './jobs/location';

@Controller('tasks')
export class TasksController {
  constructor(private readonly locationJob: LocationJob) {}

  @Get('/location')
  async getLocation(): Promise<unknown> {
    return await this.locationJob.job();
  }
}
