import { View, Text, Image } from '@tarojs/components';
// import classNames from 'classnames';
import css from './index.module.scss';

interface ActiveCardProps {
  cover: string;
  title: string;
  address: string;
  startTime: number;
  endTime: number;
}

export default function ActiveCard({ cover }: ActiveCardProps) {
  return (
    <View className={css['active-card']}>
      {/* 图片 */}
      <View className={css['cover-container']}>
        <Image src={cover} className={css['cover-img']} />
        <Text className={css['tag']}>线下收费</Text>
      </View>

      {/* info */}
      <View>
        <View>{}</View>
      </View>
    </View>
  );
}
