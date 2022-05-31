import { convertPixelToRem } from 'css-blocks-styled-components';
import styled, { css } from 'styled-components';

const baseStyles = css`
  line-height: 1.31;
`;

export const HeaderTitle = styled.h1`
  ${baseStyles}

  font-size: ${convertPixelToRem(20)};
  font-weight: 700;
`;

export const HeaderSubTitle = styled.h2`
  ${baseStyles}

  font-size: ${convertPixelToRem(18)};
  font-weight: 600;
`;
