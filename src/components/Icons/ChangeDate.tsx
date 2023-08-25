import { FC } from 'react';

import { SVG, IconProps } from './base';

const ChangeDate: FC<IconProps> = ({ className, size = 24 }) => {
  return (
    <SVG
      $size={size}
      className={className}
      fill="none"
      viewBox="0 0 20 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 9H1M14 1V5M6 1V5M5.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H5.8C4.11984 3 3.27976 3 2.63803 3.32698C2.07354 3.6146 1.6146 4.07354 1.32698 4.63803C1 5.27976 1 6.11984 1 7.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21Z"
        stroke="#696969"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
};

export default ChangeDate;
