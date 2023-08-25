import { FC } from 'react';

import { SVG, IconProps } from './base';

const Alert: FC<IconProps> = ({ className, size = 24 }) => {
  return (
    // <SVG
    //   $size={size}
    //   className={className}
    //   focusable="false"
    //   aria-hidden="true"
    //   viewBox="0 0 24 24"
    //   stroke="currentColor"
    //   fill="currentColor"
    // >
    //   <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
    // </SVG>
    <SVG
      stroke="currentColor"
      fill="none"
      $size={size}
      className={className}
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      height="1em"
      width="1em"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
      <circle fill="currentColor" cx="12" cy="15" r="0.2" />
    </SVG>
  );
};

export default Alert;
