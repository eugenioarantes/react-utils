import styled, { css } from 'styled-components';
import { scrollBarStyled } from '../../styles/snippets';

interface ContainerProps {
  $maxHeight: number;
  $manageOverflow: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ $maxHeight }) =>
    !!$maxHeight &&
    css`
      max-height: ${$maxHeight}px;
      height: ${$maxHeight}px;
    `}

  ${({ $manageOverflow }) =>
    $manageOverflow &&
    css`
      overflow-y: auto;
      ${scrollBarStyled}
    `}
`;
