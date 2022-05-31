import { convertPixelToRem } from 'css-blocks-styled-components';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Button = styled.button`
  background: ${theme.colors.primary};
  height: ${convertPixelToRem(34)};
  width: ${convertPixelToRem(162)};
  font-weight: 500;
  font-size: ${convertPixelToRem(13)};
  letter-spacing: 0.2em;
  box-shadow: ${theme.boxShadows.button};
  border-radius: ${convertPixelToRem(3)};
  border: 0;
  color: #fff;
  text-transform: uppercase;

  transition: background-color 0.2s ease;

  :hover {
    background-color: ${theme.colors.primaryMediumLighter};
  }

  :disabled {
    background-color: ${theme.colors.primaryLighter};
    cursor: not-allowed;
  }
`;
