import { FC } from 'react';

import { SVG, IconProps } from './base';

const BackArrow: FC<IconProps & { color?: string }> = ({
  className,
  size = 24,
  color = '#696969',
}) => {
  return (
    <SVG
      $size={size}
      className={className}
      focusable="false"
      viewBox="0 0 16 18"
      aria-hidden="true"
    >
      <path
        d="M15 8.89722H1M1 8.89722L8 16.1633M1 8.89722L8 1.63116"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
};

export default BackArrow;
