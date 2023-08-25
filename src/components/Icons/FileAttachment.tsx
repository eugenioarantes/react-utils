import { FC } from 'react';

import { SVG, IconProps } from './base';

interface FileAttachmentProps extends IconProps {
  viewBox?: string;
  stroke?: string;
}

const FileAttachment: FC<FileAttachmentProps> = ({
  className,
  size = 24,
  viewBox = '0 0 22 22',
  stroke = '#696969',
}) => {
  return (
    <SVG
      $size={size}
      className={className}
      fill="transparent"
      stroke-width="0"
      viewBox={viewBox}
      aria-hidden="true"
    >
      <path
        d="M17 6V5.8C17 4.11984 17 3.27976 16.673 2.63803C16.3854 2.07354 15.9265 1.6146 15.362 1.32698C14.7202 1 13.8802 1 12.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21H9.5M9.5 10H5M8.5 14H5M13 6H5M15 17V11.5C15 10.6716 15.6716 10 16.5 10C17.3284 10 18 10.6716 18 11.5V17C18 18.6569 16.6569 20 15 20C13.3431 20 12 18.6569 12 17V13"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
};

export default FileAttachment;
