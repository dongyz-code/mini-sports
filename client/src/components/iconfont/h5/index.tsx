/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react';
import IconHuodong from './IconHuodong';
import IconChuangjianv from './IconChuangjianv';
import IconFanjutuijian from './IconFanjutuijian';
import IconYumaoqiu from './IconYumaoqiu';
import IconHandUp from './IconHandUp';
import IconArrowSortdownSmal from './IconArrowSortdownSmal';
import IconHome from './IconHome';
import IconMyFillLight from './IconMyFillLight';
import IconCoffeeCup from './IconCoffeeCup';
import IconCameraSolid from './IconCameraSolid';
import IconCoffee from './IconCoffee';
import IconChicken from './IconChicken';
import IconBankCard from './IconBankCard';
import IconDeleteLocation from './IconDeleteLocation';
import IconIceCreamRound from './IconIceCreamRound';
import IconOpen from './IconOpen';
import IconPriceTag from './IconPriceTag';
import IconTurnOff from './IconTurnOff';
export { default as IconHuodong } from './IconHuodong';
export { default as IconChuangjianv } from './IconChuangjianv';
export { default as IconFanjutuijian } from './IconFanjutuijian';
export { default as IconYumaoqiu } from './IconYumaoqiu';
export { default as IconHandUp } from './IconHandUp';
export { default as IconArrowSortdownSmal } from './IconArrowSortdownSmal';
export { default as IconHome } from './IconHome';
export { default as IconMyFillLight } from './IconMyFillLight';
export { default as IconCoffeeCup } from './IconCoffeeCup';
export { default as IconCameraSolid } from './IconCameraSolid';
export { default as IconCoffee } from './IconCoffee';
export { default as IconChicken } from './IconChicken';
export { default as IconBankCard } from './IconBankCard';
export { default as IconDeleteLocation } from './IconDeleteLocation';
export { default as IconIceCreamRound } from './IconIceCreamRound';
export { default as IconOpen } from './IconOpen';
export { default as IconPriceTag } from './IconPriceTag';
export { default as IconTurnOff } from './IconTurnOff';

export type IconNames = 'huodong' | 'chuangjianv' | 'fanjutuijian' | 'yumaoqiu' | 'hand-up' | 'arrow-sortdown-smal' | 'home' | 'my_fill_light' | 'coffee-cup' | 'camera-solid' | 'coffee' | 'chicken' | 'bank-card' | 'delete-location' | 'ice-cream-round' | 'open' | 'price-tag' | 'turn-off';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'huodong':
      return <IconHuodong {...rest} />;
    case 'chuangjianv':
      return <IconChuangjianv {...rest} />;
    case 'fanjutuijian':
      return <IconFanjutuijian {...rest} />;
    case 'yumaoqiu':
      return <IconYumaoqiu {...rest} />;
    case 'hand-up':
      return <IconHandUp {...rest} />;
    case 'arrow-sortdown-smal':
      return <IconArrowSortdownSmal {...rest} />;
    case 'home':
      return <IconHome {...rest} />;
    case 'my_fill_light':
      return <IconMyFillLight {...rest} />;
    case 'coffee-cup':
      return <IconCoffeeCup {...rest} />;
    case 'camera-solid':
      return <IconCameraSolid {...rest} />;
    case 'coffee':
      return <IconCoffee {...rest} />;
    case 'chicken':
      return <IconChicken {...rest} />;
    case 'bank-card':
      return <IconBankCard {...rest} />;
    case 'delete-location':
      return <IconDeleteLocation {...rest} />;
    case 'ice-cream-round':
      return <IconIceCreamRound {...rest} />;
    case 'open':
      return <IconOpen {...rest} />;
    case 'price-tag':
      return <IconPriceTag {...rest} />;
    case 'turn-off':
      return <IconTurnOff {...rest} />;

  }

  return null;
};

export default IconFont;
