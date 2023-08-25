import { FC } from 'react';

import { SVG, IconProps } from './base';

const User: FC<IconProps> = ({ className, size = 16 }) => {
  return (
    <SVG
      $size={size}
      className={className}
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.85309 9.74664H7.14691C3.20634 9.74664 0 13.0126 0 17.0264V17.0613C0 17.7366 0.538792 18.2854 1.20172 18.2854H14.7983C15.4612 18.2854 16 17.7366 16 17.0613V17.0264C16 13.0126 12.7937 9.74664 8.85309 9.74664ZM15.2024 17.0586C15.2024 17.2846 15.0201 17.4702 14.7983 17.4702H1.20172C0.979861 17.4702 0.797623 17.2846 0.797623 17.0586V17.0237C0.797623 13.4591 3.64477 10.5564 7.14691 10.5564H8.85309C12.3526 10.5564 15.2024 13.4564 15.2024 17.0237V17.0586Z"
        fill="#696969"
      />
      <path
        d="M7.9999 8.797C10.3822 8.797 12.3182 6.82507 12.3182 4.3985C12.3182 1.97193 10.3796 0 7.9999 0C5.62023 0 3.68164 1.97193 3.68164 4.3985C3.68164 6.82507 5.61759 8.797 7.9999 8.797ZM7.9999 0.812445C9.94113 0.812445 11.5205 2.42119 11.5205 4.3985C11.5205 6.37581 9.94113 7.98456 7.9999 7.98456C6.05866 7.98456 4.47926 6.37581 4.47926 4.3985C4.47926 2.42119 6.05866 0.812445 7.9999 0.812445Z"
        fill="#696969"
      />
    </SVG>
  );
};

export default User;
