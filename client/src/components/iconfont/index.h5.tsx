/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import Taro from '@tarojs/taro';
import Icon from './h5';

export type IconNames = 'huodong' | 'chuangjianv' | 'fanjutuijian' | 'yumaoqiu' | 'hand-up' | 'arrow-sortdown-smal' | 'home' | 'my_fill_light' | 'coffee-cup' | 'camera-solid' | 'coffee' | 'chicken' | 'bank-card' | 'delete-location' | 'ice-cream-round' | 'open' | 'price-tag' | 'turn-off';

interface Props {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color, style } = props;

  return <Icon name={name} size={parseFloat(Taro.pxTransform(size, 750))} color={color} style={style} />;
};

IconFont.defaultProps = {
  size: 18,
};

export default IconFont;
