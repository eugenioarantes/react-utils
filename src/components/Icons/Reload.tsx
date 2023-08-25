import { FC } from 'react';

import { SVG, IconProps } from './base';

const Reload: FC<IconProps & { color?: string }> = ({
  className,
  size = 20,
  color = '#646E75',
}) => {
  return (
    <SVG
      $size={size}
      width="19"
      height="18"
      className={className}
      focusable="false"
      viewBox="0 0 19 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1.13104 7.23811C1.13104 7.23811 2.89732 4.83157 4.33225 3.39565C5.76718 1.95973 7.7501 1.0715 9.94049 1.0715C14.3193 1.0715 17.869 4.62121 17.869 9C17.869 13.3788 14.3193 16.9285 9.94049 16.9285C6.32589 16.9285 3.27624 14.5097 2.32187 11.2024M1.13104 7.23811V1.95245M1.13104 7.23811H6.41671"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
};

export default Reload;
