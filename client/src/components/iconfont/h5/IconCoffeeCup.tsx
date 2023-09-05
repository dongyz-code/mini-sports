/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const IconCoffeeCup: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1195 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M938.643205 85.27147a252.999418 252.999418 0 0 1 223.987681 131.406106c23.038733 41.299062 33.960799 84.646011 32.680869 129.955519a259.484395 259.484395 0 0 1-38.653874 128.67559 246.941085 246.941085 0 0 1-97.27465 92.666903 255.985921 255.985921 0 0 1-131.406106 29.353052c-21.33216 76.454462-61.948593 137.976411-121.934627 184.651178-59.986034 46.674766-129.528876 70.396128-208.713854 71.334743H341.342723c-96.848007-2.645188-177.312914-36.008686-241.309394-100.005166S2.758679 608.848007 0.028162 512V42.692479C0.028162 30.234497 4.038608 19.99506 12.059501 11.974168A41.555048 41.555048 0 0 1 42.777811 0.028158h853.286403c12.457981 0 22.61209 4.010446 30.632982 11.94601 8.020892 8.020892 11.94601 18.260329 11.946009 30.718311V85.356799 85.27147z m0 85.32864v341.314561c48.040024-0.853286 88.229814-17.5777 120.654698-50.002583 32.424883-32.424883 49.063968-72.700001 50.002583-120.654697-0.853286-48.040024-17.5777-88.229814-50.002583-120.654697-32.424883-32.424883-72.700001-49.063968-120.654698-50.002584z m-895.950723 767.957763h853.286403c12.457981 0 22.697418 4.010446 30.718311 11.946009 7.935564 8.020892 11.94601 18.260329 11.946009 30.718311a41.555048 41.555048 0 0 1-11.946009 30.71831 41.555048 41.555048 0 0 1-30.718311 11.94601H42.692482a41.555048 41.555048 0 0 1-30.71831-11.94601 41.555048 41.555048 0 0 1-11.94601-30.71831c0-12.457981 4.010446-22.697418 11.94601-30.718311A41.555048 41.555048 0 0 1 42.692482 938.643201z m42.664321-853.286403v426.643201c1.791901 72.870659 26.707864 133.368665 74.66256 181.323361s108.367373 72.870659 181.32336 74.66256h255.985921c72.870659-1.791901 133.368665-26.707864 181.323361-74.66256s72.870659-108.367373 74.66256-181.323361v-426.643201H85.356803z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconCoffeeCup.defaultProps = {
  size: 18,
};

export default IconCoffeeCup;