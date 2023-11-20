import { FC, useState } from 'react';
import { View, Image } from '@tarojs/components';
import { chooseImage } from '@tarojs/taro';
import classNames from 'classnames';
import IconFont from '@/components/iconfont';
import css from './index.module.scss';

interface ImageUploadProps {
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (val: string) => void;
}

const ImageUpload: FC<ImageUploadProps> = ({ className, value, onChange, placeholder }) => {
  const [loading, setLoading] = useState(false);

  // 点击上传图片
  const handleClick = () => {
    chooseImage({
      count: 1,
      success(result) {
        console.log(result);
        uploadImage(result.tempFilePaths[0]);
      },
    });
  };

  // 确认上传图片
  const uploadImage = async (url: string) => {
    onChange?.(url);
  };

  return (
    <View className={classNames(className, css['image-upload'])} onClick={handleClick}>
      <View>
        <View className={css['icon-content']}>
          <IconFont name="camera-solid" color="var(--color-text-description)" size={32} />
        </View>

        <View className={css['placeholder']}>{placeholder || '上传活动封面图'}</View>
      </View>
      <View className={css['img-content']}>{!!value && <Image src={value} className={css['img']}></Image>}</View>
    </View>
  );
};

export default ImageUpload;
