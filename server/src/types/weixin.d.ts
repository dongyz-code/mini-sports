/** 微信AccessToken响应值 */
export interface WeixinAccessToken {
  access_token: string;
  expires_in: number;
}

/** 微信获取上传文件url响应值 */
export interface WeixinFileUplaodUrl {
  errcode: number;
  errmsg: string;
  url: string;
  token: string;
  authorization: string;
  file_id: string;
  cos_file_id: string;
}
