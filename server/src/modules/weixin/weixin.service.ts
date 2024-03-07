import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WeixinAccessToken, WeixinFileUplaodUrl } from 'src/types';
import { request } from 'src/utils';

@Injectable()
export class WeixinService {
  constructor(private configService: ConfigService) {}

  private url = {
    getAccessToken: 'https://api.weixin.qq.com/cgi-bin/token',
    getUploadUrl: 'https://api.weixin.qq.com/tcb/uploadfile',
  };

  private now?: number = null;
  private accessToken?: WeixinAccessToken = null;

  async getWeixinAccessToken(): Promise<WeixinAccessToken> {
    if (!this.now || !this.accessToken) {
      return this.realGetToken();
    }

    const now = Date.now();

    if (now - this.now >= this.accessToken.expires_in) {
      return this.realGetToken();
    }

    return this.accessToken;
  }

  async realGetToken() {
    const res = await request.get<WeixinAccessToken>(this.url.getAccessToken, {
      params: {
        grant_type: 'client_credential',
        appid: this.configService.get('APP_ID'),
        secret: this.configService.get('APP_SECRET'),
      },
    });

    this.now = Date.now();

    this.accessToken = res.data;

    return res.data;
  }

  async getFileUploadUrl(filePath: string) {
    if (!filePath) return;

    const access_token = await this.getWeixinAccessToken();

    const res = await request<WeixinFileUplaodUrl>({
      url: this.url.getUploadUrl,
      method: 'POST',
      params: {
        access_token: access_token.access_token,
      },
      data: {
        env: this.configService.get('SERVER_ENV'),
        path: filePath,
      },
    });

    return res.data;
  }
}
