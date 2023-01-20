import IconButton from '@mui/material/IconButton';
import { getBoxWidthAndHeight } from 'css-blocks-styled-components';
import styled, { css } from 'styled-components';

interface FilterIconProps {
  $hasFilter: boolean;
}

export const FilterButton = styled(IconButton)<FilterIconProps>`
  svg {
    color: #666;
    ${getBoxWidthAndHeight(28)}
  }

  ${({ $hasFilter }) =>
    $hasFilter &&
    css`
      border: 1px solid #16aeef !important;

      svg {
        color: #16aeef;
      }
    `};
`;
