import { FC } from 'react';

import { SVG, IconProps } from './base';

const StyledUploadIcon: FC<IconProps> = ({ className, size = 20 }) => {
  return (
    <SVG $size={size} className={className} fill="none" viewBox="0 0 22 20">
      <path
        d="M3 14.2422C1.79401 13.435 1 12.0602 1 10.5C1 8.15643 2.79151 6.23129 5.07974 6.01937C5.54781 3.17213 8.02024 1 11 1C13.9798 1 16.4522 3.17213 16.9203 6.01937C19.2085 6.23129 21 8.15643 21 10.5C21 12.0602 20.206 13.435 19 14.2422M7 14L11 10M11 10L15 14M11 10V19"
        stroke="#0695FD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
};

export default StyledUploadIcon;
