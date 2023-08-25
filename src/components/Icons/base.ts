import { getBoxWidthAndHeight } from 'css-blocks-styled-components';
import styled from 'styled-components';

export interface IconProps {
  children?: never;
  className?: string;
  size?: number;
  color?: string;
}

export const SVG = styled.svg<{ $size: number }>`
  color: inherit;

  ${({ $size }) => getBoxWidthAndHeight($size)};
`;
