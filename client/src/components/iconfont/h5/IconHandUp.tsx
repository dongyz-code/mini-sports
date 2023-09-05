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

const IconHandUp: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M486.4 142.933333c27.733333 0 49.066667 10.666667 64 32 14.933333 21.333333 21.333333 46.933333 21.333333 78.933334v59.733333l192 74.666667c8.533333 2.133333 14.933333 6.4 23.466667 10.666666 8.533333 4.266667 10.666667 10.666667 10.666667 17.066667v194.133333c0 2.133333-14.933333 19.2-46.933334 51.2-29.866667 32-49.066667 46.933333-53.333333 46.933334h-298.666667c-6.4 0-12.8-2.133333-19.2-8.533334-6.4-4.266667-12.8-10.666667-17.066666-14.933333l-4.266667-8.533333-130.133333-206.933334c-6.4-12.8-4.266667-21.333333 4.266666-29.866666l64-61.866667c4.266667-4.266667 10.666667-8.533333 19.2-8.533333s12.8 2.133333 19.2 6.4l68.266667 46.933333v-172.8c0-32 6.4-57.6 21.333333-78.933333s34.133333-27.733333 61.866667-27.733334z m27.733333 183.466667v-115.2c0-8.533333-4.266667-12.8-14.933333-17.066667-8.533333-4.266667-19.2-4.266667-27.733333 0s-14.933333 8.533333-14.933334 17.066667V488.533333l-2.133333 2.133334c0 2.133333 0 2.133333-2.133333 2.133333s-2.133333 0-2.133334 2.133333-2.133333 2.133333-2.133333 2.133334c-8.533333 4.266667-19.2 4.266667-27.733333-2.133334l-104.533334-83.2-46.933333 49.066667 134.4 192h285.866667l51.2-57.6V428.8l-192-74.666667c-8.533333-2.133333-14.933333-6.4-23.466667-10.666666-6.4-6.4-10.666667-10.666667-10.666667-17.066667z m-85.333333 439.466667h283.733333c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533334 19.2v57.6c0 8.533333-2.133333 14.933333-8.533334 19.2-6.4 6.4-12.8 8.533333-19.2 8.533333h-283.733333c-8.533333 0-14.933333-2.133333-19.2-8.533333-6.4-6.4-8.533333-12.8-8.533333-19.2v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 4.266667-6.4 12.8-8.533333 19.2-8.533333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconHandUp.defaultProps = {
  size: 18,
};

export default IconHandUp;
