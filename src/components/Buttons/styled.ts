import styled, { css } from 'styled-components';
import { flex, noBorderNoOutline } from 'css-blocks-styled-components';

import { QUERIES } from '../../utils/constants';

export const TransparentButton = styled.button<{ $hoverOpacityShift?: boolean }>`
  ${flex.middle}

  ${noBorderNoOutline};

  background: transparent;

  ${({ $hoverOpacityShift }) =>
    $hoverOpacityShift &&
    css`
      ${QUERIES.HOVER_ENABLED} {
        transition: opacity 0.35s ease;

        &:hover {
          opacity: 0.75;
        }
      }
    `};
`;
