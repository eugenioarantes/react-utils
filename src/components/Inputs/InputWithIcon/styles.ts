import styled, { css } from 'styled-components';
import {
  noBorderNoOutline,
  flexAlignCenter,
  getBoxWidthAndHeight,
  getPadding,
  convertPixelToRem,
} from 'css-blocks-styled-components';

import { TransparentButton } from '../../Buttons';

import { QUERIES } from '../../../utils/constants';

interface ControlProps {
  focusOn: boolean;
  hasText: boolean;
  hasError: boolean;
}

export const Container = styled.div<ControlProps>`
  ${flexAlignCenter}
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.palette.grey[400]};
  color: #666360;
  background-color: #fff;
  position: relative;
  font-size: ${convertPixelToRem(16)};
  line-height: 1.43;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: #c53030;
    `}
  ${({ focusOn }) =>
    focusOn &&
    css`
      border-color: ${({ theme }) => theme.palette.primary.main};
    `}

  div {
    ${flexAlignCenter}

    svg {
      cursor: pointer;
    }
  }

  > svg {
    ${getBoxWidthAndHeight(20)};
    position: absolute;
    left: 12px;
    pointer-events: none;

    ${QUERIES.PHONES} {
      left: 8px;
    }
  }

  > svg {
    ${({ focusOn, hasText }) =>
      (focusOn || hasText) &&
      css`
        color: ${({ theme }) => theme.palette.primary.main};
      `}
  }

  ${QUERIES.SMALL_TABLET} {
    font-size: ${convertPixelToRem(16)};
  }
`;

export const PasswordToggleButton = styled(TransparentButton)`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.palette.grey[500]};

  > svg {
    ${getBoxWidthAndHeight(20)};
  }
`;

export const StyledInput = styled.input`
  ${noBorderNoOutline}
  border-radius: 10px;
  ${getPadding(8, 40)}
  width: 100%;
  height: 100%;

  &:-internal-autofill-selected {
    background-color: #fff !important;
  }

  &::placeholder {
    color: #666360;
  }

  background: #fff;
`;
