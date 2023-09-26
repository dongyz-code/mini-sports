import { FC } from 'react';
import { View, Input } from '@tarojs/components';
import { AtInput } from 'taro-ui';
import Taro from '@tarojs/taro';

const MapChoosePoint: FC = () => {
  const chooseLocation = () => {
    console.log(12);
    Taro.chooseLocation({
      success: (res) => {
        console.log(res);
      },
    });
  };
  return <View onClick={chooseLocation} style={{ height: '100rpx' }} />;
};

export default MapChoosePoint;
