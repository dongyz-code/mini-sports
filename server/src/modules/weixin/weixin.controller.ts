import { Controller, Get, Post, Body } from '@nestjs/common';
import { WeixinService } from './weixin.service';
import { WeixinAccessToken, WeixinFileUplaodUrl } from 'src/types';
import { GetUploadUrlParamsDto } from './dto/GetUploadUrl.dto';

@Controller('weixin')
export class WeixinController {
  constructor(private readonly weixinService: WeixinService) {}

  @Get('access-token')
  async getWeixinAccessToken(): Promise<WeixinAccessToken> {
    return this.weixinService.getWeixinAccessToken();
  }

  @Post('upload-url')
  async getWeixinUploadUrl(@Body() { filePath }: GetUploadUrlParamsDto): Promise<WeixinFileUplaodUrl> {
    return this.weixinService.getFileUploadUrl(filePath);
  }
}
