import { convertPixelToRem } from 'css-blocks-styled-components';
import styled from 'styled-components';

export const Container = styled.div`
  width: ${convertPixelToRem(165)};
`;
