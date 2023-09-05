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

const IconHome: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M577.5584 307.848533l-21.345067-18.699733c-0.062933-0.061867-0.186667-0.123733-0.280533-0.186667l-44.305067-38.689067-53.752533 47.5648L127.009067 587.424l0 177.1392 0 155.0048c0 45.886933 37.454933 83.0976 83.610667 83.0976l183.966933 0L394.586667 735.8688c0-27.512533 22.448-49.8336 50.162133-49.8336l133.7728 0c27.714133 0 50.178133 22.321067 50.178133 49.8336L628.699733 1002.666667l183.966933 0c46.170667 0 83.610667-37.211733 83.610667-83.0976L896.277333 763.9424 896.277333 586.7712 578.5216 308.688 577.5584 307.848533z"
        fill={getIconColor(color, 0, '#353030')}
      />
      <path
        d="M990.637867 418.164267l-94.360533-82.600533 0-181.290667c0-36.714667-29.952-66.482133-66.894933-66.482133-36.941867 0-66.893867 29.767467-66.893867 66.482133l0 64.197333L556.213333 37.911467c-25.291733-22.103467-63.165867-22.103467-88.4256 0L33.348267 418.164267c-27.730133 24.247467-30.402133 66.264533-5.9808 93.808 24.437333 27.544533 66.692267 30.219733 94.407467 5.938133L512 176.376533l390.2432 341.533867c12.7072 11.130667 28.4608 16.600533 44.181333 16.600533 18.549333 0 37.0048-7.617067 50.209067-22.538667C1021.054933 484.4128 1018.382933 442.4128 990.637867 418.164267z"
        fill={getIconColor(color, 1, '#353030')}
      />
    </svg>
  );
};

IconHome.defaultProps = {
  size: 18,
};

export default IconHome;
