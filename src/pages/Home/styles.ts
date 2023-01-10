import { convertPixelToRem } from 'css-blocks-styled-components';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${convertPixelToRem(25)};
`;
