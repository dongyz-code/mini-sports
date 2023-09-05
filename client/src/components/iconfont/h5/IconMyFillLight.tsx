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

const IconMyFillLight: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M616.533333 618.666667c106.666667-42.666667 181.333333-147.2 181.333334-266.666667C797.866667 192 669.866667 64 509.866667 64c-157.866667 0-288 128-288 288 0 121.6 74.666667 224 181.333333 266.666667-134.4 38.4-241.066667 151.466667-268.8 294.4-2.133333 6.4 0 12.8 4.266667 17.066666 2.133333 4.266667 8.533333 8.533333 14.933333 8.533334h712.533333c6.4 0 12.8-2.133333 17.066667-8.533334 4.266667-4.266667 6.4-10.666667 4.266667-17.066666-29.866667-142.933333-136.533333-256-270.933334-294.4z"
        fill={getIconColor(color, 0, '#666666')}
      />
    </svg>
  );
};

IconMyFillLight.defaultProps = {
  size: 18,
};

export default IconMyFillLight;
