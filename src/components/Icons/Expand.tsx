{
  /* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M12 8L19 1M19 1H13M19 1V7M8 12L1 19M1 19H7M1 19L1 13"
    stroke="#344054"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>; */
}

import { FC } from 'react';

import { SVG, IconProps } from './base';

const Expand: FC<IconProps> = ({ className, size = 24 }) => {
  return (
    <SVG $size={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 8L19 1M19 1H13M19 1V7M8 12L1 19M1 19H7M1 19L1 13"
        stroke="#696969"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
};

export default Expand;
