import Taro from '@tarojs/taro';
import { UploadOption } from './types.d';

export class Uploader {
  async realUpload(path: string) {
    const key = path?.split('/').pop();

    if (!key) {
      return;
    }

    const res = await Taro.cloud.uploadFile({
      cloudPath: key,
      filePath: path,
    });

    const urlRes = await Taro.cloud.getTempFileURL({
      fileList: [res.fileID],
    });

    const fileRes = urlRes.fileList[0];

    if (fileRes.status !== 200) {
      return Promise.reject(fileRes.errMsg);
    }

    return urlRes.fileList[0].tempFileURL;
  }
}
