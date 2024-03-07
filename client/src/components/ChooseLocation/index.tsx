import { FC } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classNames from 'classnames';
import { WexinLocation } from '@/types';
import IconFont from '../iconfont';
import css from './index.module.scss';

interface ChooseLocationProps {
  required?: boolean;
  value?: WexinLocation;
  onChange?: (location: WexinLocation) => void;
  placeholder?: string;
}

const ChooseLocation: FC<ChooseLocationProps> = ({ value, onChange }) => {
  const chooseLocation = () => {
    Taro.chooseLocation({
      success: (res) => {
        console.log(res);
        onChange?.(res);
      },
    });
  };

  return (
    <View onClick={chooseLocation} className={classNames(css['choose-location-wrap'])}>
      <View className={classNames(css['choose-label'])}>
        {value?.address && <View className={css['location-title']}>{value?.address}</View>}
      </View>

      <View className={css['right-tip']}>
        {!value && <Text className={css['tip-text']}>请选择</Text>}
        <IconFont name="delete-location" size={32} color="#1677ff"></IconFont>
      </View>
    </View>
  );
};

export default ChooseLocation;
