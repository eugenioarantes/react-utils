import IconButton from '@mui/material/IconButton';
import {
  convertPixelToRem,
  getBoxWidthAndHeight,
  getPadding,
  noBorderNoOutline,
} from 'css-blocks-styled-components';
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

export const SearchInputContainer = styled.div`
  position: relative;
  height: ${convertPixelToRem(36)};
  width: ${convertPixelToRem(250)};

  color: ${({ theme }) => theme.palette.grey[400]};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.palette.grey[300]};

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 8px;
    ${getBoxWidthAndHeight(22)}
  }

  input {
    ${getPadding(5, 8, 5, 40)}
    border-radius: 4px;
    ${noBorderNoOutline}
    background: transparent;
    position: absolute;
    inset: 0;
    color: #646e75;

    ::placeholder {
      color: ${({ theme }) => theme.palette.grey[400]};
    }
  }
`;
