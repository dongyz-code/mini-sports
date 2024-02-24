import { FC, useState } from 'react';
import { View, Image } from '@tarojs/components';
import Taro, { chooseImage } from '@tarojs/taro';
import classNames from 'classnames';
import IconFont from '@/components/iconfont';
import { Loading } from '@nutui/icons-react-taro';
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
    if (loading) return;

    chooseImage({
      count: 1,
      sourceType: ['album', 'camera'],
      success(result) {
        uploadImage(result.tempFilePaths);
      },
    });
  };

  // 确认上传图片
  const uploadImage = async (paths: string[]) => {
    setLoading(true);
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];

      const key = path.split('/').pop();

      if (!key) {
        continue;
      }
      const res = await Taro.cloud.uploadFile({
        cloudPath: key,
        filePath: path,
      });

      const urlRes = await Taro.cloud.getTempFileURL({
        fileList: [res.fileID],
      });

      onChange?.(urlRes.fileList[0].tempFileURL);
    }

    setLoading(false);
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

      {loading && (
        <View className={css['mask']}>
          <Loading />
        </View>
      )}
    </View>
  );
};

export default ImageUpload;
