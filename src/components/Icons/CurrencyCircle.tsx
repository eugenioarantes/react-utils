<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7.5 13.6667C7.5 14.9553 8.54467 16 9.83333 16H12C13.3807 16 14.5 14.8807 14.5 13.5C14.5 12.1193 13.3807 11 12 11H10C8.61929 11 7.5 9.88071 7.5 8.5C7.5 7.11929 8.61929 6 10 6H12.1667C13.4553 6 14.5 7.04467 14.5 8.33333M11 4.5V6M11 16V17.5M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>;

import { FC } from 'react';

import { SVG, IconProps } from './base';

const CurrencyCircle: FC<IconProps> = ({ className, size = 24 }) => {
  return (
    <SVG
      $size={size}
      className={className}
      fill="none"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 13.6667C7.5 14.9553 8.54467 16 9.83333 16H12C13.3807 16 14.5 14.8807 14.5 13.5C14.5 12.1193 13.3807 11 12 11H10C8.61929 11 7.5 9.88071 7.5 8.5C7.5 7.11929 8.61929 6 10 6H12.1667C13.4553 6 14.5 7.04467 14.5 8.33333M11 4.5V6M11 16V17.5M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        stroke="#696969"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
};

export default CurrencyCircle;
