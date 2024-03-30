import { Controller, UseInterceptors, Get } from '@nestjs/common';

import { CommonService } from './common.service';
import { CacheInterceptor } from 'src/common/interceptors/cache.interceptor';
import { Public } from 'src/common/decorators';

@Controller('common')
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @Public()
  @Get('locations')
  @UseInterceptors(CacheInterceptor)
  async getLocations() {
    return this.commonService.findAllLocations();
  }
}
