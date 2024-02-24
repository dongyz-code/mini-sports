export type WeixinFileUplaodUrl = {
  errcode: number;
  errmsg: string;
  url: string;
  token: string;
  authorization: string;
  file_id: string;
  cos_file_id: string;
};

export type WeixinImageFile = {
  path: string;
  size: number;
};
