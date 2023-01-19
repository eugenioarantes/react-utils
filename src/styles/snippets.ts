import { getScrollbarStyle } from 'css-blocks-styled-components';
import { css } from 'styled-components';

export const scrollBarStyled = css`
  ${getScrollbarStyle({
    scrollColor: '#666',
  })}
`;
