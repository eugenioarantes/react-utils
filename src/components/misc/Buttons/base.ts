import styled from 'styled-components';
import { flex, noBorderNoOutline } from 'css-blocks-styled-components';

export const TransparentButton = styled.button`
  ${flex.middle}

  ${noBorderNoOutline};

  background: transparent;
`;
