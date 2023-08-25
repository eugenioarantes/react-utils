import { FC } from 'react';

import { SVG, IconProps } from './base';

const Eye: FC<IconProps & { color?: string }> = ({ className, size = 20, color = '#fff' }) => {
  return (
    <SVG $size={size} width="24" height="18" className={className} viewBox="0 0 24 18" fill="none">
      <path
        d="M1.78588 10.0063C1.63792 9.77203 1.56395 9.6549 1.52254 9.47422C1.49143 9.33852 1.49143 9.12449 1.52254 8.98879C1.56395 8.80811 1.63792 8.69098 1.78588 8.45671C3.00852 6.52077 6.64783 1.62671 12.1939 1.62671C17.74 1.62671 21.3793 6.52076 22.602 8.45671C22.7499 8.69098 22.8239 8.80811 22.8653 8.98879C22.8964 9.12449 22.8964 9.33852 22.8653 9.47422C22.8239 9.6549 22.7499 9.77203 22.602 10.0063C21.3793 11.9422 17.74 16.8363 12.1939 16.8363C6.64783 16.8363 3.00852 11.9422 1.78588 10.0063Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M12.1939 12.4907C13.9939 12.4907 15.4531 11.0315 15.4531 9.2315C15.4531 7.4315 13.9939 5.97231 12.1939 5.97231C10.3939 5.97231 8.93471 7.4315 8.93471 9.2315C8.93471 11.0315 10.3939 12.4907 12.1939 12.4907Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
};

export default Eye;
