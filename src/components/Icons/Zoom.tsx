import { FC } from 'react';

import { SVG, IconProps } from './base';

const Zoom: FC<IconProps> = ({ className, size = 24 }) => {
  return (
    <SVG
      className={className}
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      $size={size}
    >
      <desc />
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 13v4" />
      <path d="M13 15h4" />
      <circle cx="15" cy="15" r="5" />
      <path d="M22 22l-3 -3" />
      <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />
      <path d="M3 11v-1" />
      <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />
      <path d="M10 3h1" />
      <path d="M15 3h1a2 2 0 0 1 2 2v1" />
    </SVG>
  );
};

export default Zoom;
