import styled from 'styled-components';
import { convertPixelToRem } from 'css-blocks-styled-components';

import { TextField } from '../../Material';

interface LabelProps {
  $adjustTopAlignment: boolean;
  $minWidth?: string;
}

export const MIN_INPUT_WIDTH = 100;

export const Input = styled(TextField)<LabelProps>`
  > div {
    height: ${convertPixelToRem(40)};
  }

  > label {
    top: ${({ $adjustTopAlignment }) => ($adjustTopAlignment ? '-6px' : 0)};
  }

  width: ${MIN_INPUT_WIDTH}px;
  min-width: ${({ $minWidth }) => $minWidth};
`;
