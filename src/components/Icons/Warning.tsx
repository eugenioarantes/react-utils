import { FC } from 'react';

import { SVG, IconProps } from './base';

const Warning: FC<IconProps> = ({ className, size = 24 }) => {
  return (
    <SVG
      className={className}
      $size={size}
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
    >
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </SVG>
  );
};

export default Warning;
