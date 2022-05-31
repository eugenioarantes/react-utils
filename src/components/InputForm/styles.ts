import {
  convertPixelToRem,
  flex,
  noBorderNoOutline,
  getBoxWidthAndHeight,
} from 'css-blocks-styled-components';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { TransparentButton } from '../misc/Buttons';

interface InputProps {
  $isFocused: boolean;
  $isErrored: boolean;
  $backgroundColor: string;
}

const ICON_SIZE = 20;
const ICON_MARGIN = 10;

export const Container = styled.div`
  flex-direction: column;
`;

export const InputContainer = styled.div<InputProps>`
  ${flex.alignCenter};
  flex-shrink: 0;
  padding: ${convertPixelToRem(10)};

  width: 100%;

  ${({ $backgroundColor }) =>
    css`
      background: ${$backgroundColor};
    `};

  border: 0.5px solid ${theme.colors.grayBorder};

  border-radius: 5px;

  ${({ $isErrored }) =>
    $isErrored &&
    css`
      border: 1px solid ${theme.colors.invalid};
    `}

  ${({ $isFocused }) =>
    $isFocused &&
    css`
      border: 1px solid ${theme.colors.blueBorder};
    `}

  input {
    ${noBorderNoOutline};
    background: transparent;
    flex: 1;
    max-width: calc(100% - ${ICON_SIZE + ICON_MARGIN}px);

    color: ${theme.colors.textSecondary};

    &::placeholder {
      color: ${theme.colors.textPlaceholder};
    }
  }
`;

export const ShowPasswordButton = styled(TransparentButton)`
  svg {
    ${getBoxWidthAndHeight(20)}
    color: ${theme.colors.textSecondary};
  }
`;

export const Error = styled.small`
  color: ${theme.colors.invalid};
  padding-left: ${convertPixelToRem(16)};
`;
