import React, { useState } from 'react';
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import { homeBanners, sportsTabs } from '@/config';
import clsssNames from 'classnames';
import css from './index.module.scss';

export default function Index() {
  const [tabKey, setTabKey] = useState<React.Key>(sportsTabs[0].id);

  const onChangeTabs = (id: React.Key) => {
    setTabKey(id);
  };

  return (
    <View className={css['home']}>
      {/* 轮播模块 */}
      <View className={css['home-swiper']}>
        <Swiper indicatorColor="#999" indicatorActiveColor="#333" circular indicatorDots autoplay>
          <SwiperItem>
            {homeBanners?.map((banner) => (
              <View key={banner.key} className={css['swiper-img-content']}>
                <Image src={banner.img} className={css['swiper-img']} />
              </View>
            ))}
          </SwiperItem>
        </Swiper>
      </View>

      {/* tabs */}
      <View className={css['tabs-container']}>
        <View className={css['tabs-list']}>
          {sportsTabs.map((tab) => (
            <Text
              key={tab.id}
              onClick={() => onChangeTabs(tab.id)}
              className={clsssNames(css['tabs-item'], { [css.active]: tabKey === tab.id })}
            >
              <Text className={clsssNames('iconfont', tab.icon, css['tab-icon'])}></Text>
              <Text>{tab.title}</Text>
            </Text>
          ))}
        </View>
      </View>

      {/* 活动列表 */}
    </View>
  );
}
