import { getBoxWidthAndHeight } from 'css-blocks-styled-components';
import styled from 'styled-components';

export interface IconProps {
  children?: never;
  className?: string;
  size?: number;
}

export const SVG = styled.svg<{ $size: number }>`
  color: inherit;

  ${({ $size }) => getBoxWidthAndHeight($size)};
`;
