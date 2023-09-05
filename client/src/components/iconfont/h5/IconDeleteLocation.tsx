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

const IconDeleteLocation: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M256 950.857143h512c24.356571 0 36.571429 12.214857 36.571429 36.571428 0 24.356571-12.214857 36.571429-36.571429 36.571429H256c-24.356571 0-36.571429-12.214857-36.571429-36.571429 0-24.356571 12.214857-36.571429 36.571429-36.571428z m585.142857-548.571429c-2.267429-92.964571-34.523429-170.422857-96.548571-232.594285C682.422857 107.739429 604.891429 75.483429 512 73.142857c-92.964571 2.267429-170.422857 34.450286-232.594286 96.548572C217.453714 231.862857 185.197714 309.394286 182.857143 402.285714c0 67.803429 27.209143 145.334857 81.700571 232.594286 54.491429 87.186286 136.923429 183.808 247.442286 289.645714 110.445714-105.837714 192.950857-202.459429 247.442286-289.645714C813.933714 547.620571 841.142857 470.089143 841.142857 402.285714zM512 1024C243.785143 780.214857 109.714286 572.928 109.714286 402.285714c3.072-114.322286 42.276571-209.188571 117.76-284.525714C302.811429 42.276571 397.677714 3.072 512 0c114.322286 3.072 209.188571 42.276571 284.525714 117.76C871.936 193.097143 911.213714 288.036571 914.285714 402.285714c0 170.642286-134.070857 377.929143-402.285714 621.714286z m-146.285714-658.285714h292.571428c24.356571 0 36.571429 12.214857 36.571429 36.571428 0 24.356571-12.214857 36.571429-36.571429 36.571429h-292.571428c-24.356571 0-36.571429-12.214857-36.571429-36.571429 0-24.356571 12.214857-36.571429 36.571429-36.571428z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconDeleteLocation.defaultProps = {
  size: 18,
};

export default IconDeleteLocation;
