import { FC } from 'react';

import { SVG, IconProps } from './base';

const BackArrow: FC<IconProps> = ({ className, size = 30 }) => {
  return (
    <SVG
      $size={size}
      className={className}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </SVG>
  );
};

export default BackArrow;
