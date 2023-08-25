import { FC } from 'react';

import { SVG, IconProps } from './base';

const Search: FC<IconProps> = ({ className, size = 24, color = '#bdbdbd' }) => {
  return (
    <SVG $size={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 19L15.5001 15.5M18 9.5C18 14.1944 14.1944 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1C14.1944 1 18 4.80558 18 9.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
};

export default Search;
