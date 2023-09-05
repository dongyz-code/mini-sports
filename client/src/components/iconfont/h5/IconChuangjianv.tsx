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

const IconChuangjianv: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1026 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M992 799.232h-192v191.808a32 32 0 1 1-64 0v-191.808h-192a32 32 0 1 1 0-63.936h192V543.488a32 32 0 0 1 64 0v191.808h192a32 32 0 1 1 0 63.936zM832 283.136C832 153.472 752.64 64 612.608 64H283.456C143.296 64 63.936 148.288 63.936 283.136v328.832c0 129.728 86.208 219.264 219.52 219.264h116.48v63.872H256C114.688 895.104 0 780.672 0 639.424V255.808A255.872 255.872 0 0 1 256 0h384c141.376 0 256 114.56 256 255.808v143.808h-64v-116.48z"
        fill={getIconColor(color, 0, '#5F6269')}
      />
    </svg>
  );
};

IconChuangjianv.defaultProps = {
  size: 18,
};

export default IconChuangjianv;
