/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

export type IconNames = 'huodong' | 'chuangjianv' | 'fanjutuijian' | 'yumaoqiu' | 'hand-up' | 'arrow-sortdown-smal' | 'home' | 'my_fill_light' | 'coffee-cup' | 'camera-solid' | 'coffee' | 'chicken' | 'bank-card' | 'delete-location' | 'ice-cream-round' | 'open' | 'price-tag' | 'turn-off';

export interface IconProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<IconProps> = () => {
  return null;
};

export default IconFont;
