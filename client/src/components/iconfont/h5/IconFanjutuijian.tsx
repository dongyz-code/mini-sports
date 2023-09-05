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

const IconFanjutuijian: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M640.8 316.5c-0.9 1.2-0.9 3.1 0 4.2l90 123c0.9 1.2 0.4 2-1.1 1.8L578.2 429c-1.4-0.2-3.1 0.8-3.7 2.1L513 570.6c-0.6 1.3-1.5 1.3-2.1 0l-61.5-139.5c-0.6-1.3-2.2-2.3-3.7-2.1l-151.5 16.5c-1.4 0.2-1.9-0.7-1.1-1.8l90-123c0.9-1.2 0.9-3.1 0-4.2l-90-123c-0.9-1.2-0.4-2 1.1-1.8l151.5 16.5c1.4 0.2 3.1-0.8 3.7-2.1l61.5-139.5c0.6-1.3 1.5-1.3 2.1 0l61.5 139.5c0.6 1.3 2.2 2.3 3.7 2.1l151.5-16.5c1.4-0.2 1.9 0.7 1.1 1.8l-90 123z"
        fill={getIconColor(color, 0, '#58D598')}
      />
      <path
        d="M512 585m-374.8 0a374.8 374.8 0 1 0 749.6 0 374.8 374.8 0 1 0-749.6 0Z"
        fill={getIconColor(color, 1, '#FF5C7A')}
      />
      <path
        d="M659.2 505.9h-87.8l8.5-19.8c17-36.8 16.6-67.7 2.8-90.6-14.7-24.5-41.4-28.3-55.7-27.4-5.5 0.3-10.4 3.5-13.1 8.3L438 506.1h-69.8c-11.1 0-20 9-20 20v214.7c0 11.1 9 20 20 20h74.9v-0.4c0.3 0 0.6 0.2 0.9 0.2h189.7c28.3 0 53.8-19.8 56.6-48.1l28.3-150c0-31.1-25.5-56.6-59.4-56.6z"
        fill={getIconColor(color, 2, '#FDDE80')}
      />
      <path
        d="M401.4 726.3c-11.7 0-21.4-9.6-21.4-21.4V562.1c0-11.7 9.6-21.4 21.4-21.4 11.7 0 21.4 9.6 21.4 21.4V705c-0.1 11.7-9.7 21.3-21.4 21.3z"
        fill={getIconColor(color, 3, '#FCC038')}
      />
    </svg>
  );
};

IconFanjutuijian.defaultProps = {
  size: 18,
};

export default IconFanjutuijian;
