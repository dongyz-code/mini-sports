import { WeixinImageFile } from '@/types';

export type UploadStatus = 'ready' | 'uploading' | 'success' | 'error' | 'removed';

export type SourceType = 'album' | 'camera';

export type FileItem = {
  uid?: string;

  size?: number;

  name?: string;

  status?: UploadStatus;

  percent?: number;

  raw?: WeixinImageFile;

  url?: string;

  tempPath?: string;
};

export type UploaderProps = {
  className?: string;

  value?: FileItem[];

  defaultValue?: FileItem[];

  /** 上传时附带的formData数据 */
  data?: any;

  /** headers */
  headers?: any;

  /** 是否预览 */
  preview?: boolean;

  /** 接收 */
  accept?: string;

  /** 是否自动上传文件 */
  autoUpload?: boolean;

  /** 最大上传数量 */
  limit?: number;

  /** 禁用 */
  disabled?: boolean;

  /** 是否展示删除按钮 */
  deletable?: boolean;

  /** 图片的来源 */
  sourceType: SourceType;

  /** 展示方式 */
  listType: 'text' | 'picture';

  /** 是否开启图片多选，部分安卓机型不支持 */
  multiple?: boolean;

  beforeUpload?: (file: FileItem) => void;

  onSuccess?: (file: FileItem, files: FileItem[]) => void;

  onChange?: (files: FileItem[]) => void;

  onError?: (file: FileItem, files: FileItem[]) => void;
};

export type UploadOption = {
  sourceType?: SourceType[];

  count?: number;
};
