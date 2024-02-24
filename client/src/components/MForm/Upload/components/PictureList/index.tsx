import { useState } from 'react';
import { View, Image } from '@tarojs/components';
import { Close, Loading, ImageError } from '@nutui/icons-react-taro';
import IconFont from '@/components/iconfont';
import classNames from 'classnames';
import { FileItem } from '../../types';
import css from './index.module.scss';

type UploadPicturesProps = {
  pictures: FileItem[];
  deletable?: boolean;
  hideBtn?: boolean;
  onFileChange: () => Promise<void>;
  onDelete: (file: FileItem) => void;
};

const UploadPictures = ({ pictures, deletable, hideBtn, onFileChange, onDelete }: UploadPicturesProps) => {
  return (
    <View className={css['picture-list']}>
      {pictures.map((picture) => (
        <View
          className={classNames(css['picture-item'], { [css['error']]: picture.status === 'error' })}
          key={picture.uid}
        >
          <Image className={css['picture']} src={picture.url || picture.tempPath!} />

          {deletable && (
            <View onClick={() => onDelete(picture)} className={css['delete-content']}>
              <Close className={css['delete-icon']} size="8px" color="var(--color-bg-white)"></Close>
            </View>
          )}

          {picture.status === 'uploading' && (
            <View className={css['upload-mask']}>
              <Loading className={css['uploading-icon']} color="var(--color-bg-white)"></Loading>
            </View>
          )}

          {picture.status === 'error' && (
            <View className={classNames(css['upload-mask'], css['error-mask'])}>
              <View className={css['error-content']}>
                <ImageError className={css['error-icon']} color="var(--color-error)"></ImageError>
                <View className={css['error-text']}>Error</View>
              </View>
            </View>
          )}
        </View>
      ))}

      {!hideBtn && (
        <View className={css['picture-upload-btn']} onClick={onFileChange}>
          <IconFont name="camera-solid" color="var(--color-text-description)" size={32} />
        </View>
      )}
    </View>
  );
};

export default UploadPictures;
