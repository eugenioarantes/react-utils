import { convertPixelToRem } from 'css-blocks-styled-components';
import styled from 'styled-components';

export const Button = styled.button`
  margin-top: ${convertPixelToRem(40)};
  background: #296795;
  height: ${convertPixelToRem(34)};
  width: ${convertPixelToRem(162)};
  font-weight: 500;
  font-size: ${convertPixelToRem(13)};
  letter-spacing: 0.2em;
  border-radius: ${convertPixelToRem(3)};
  border: 0;
  color: #fff;
  text-transform: uppercase;

  transition: background-color 0.2s ease;

  :hover {
    background-color: #0471ba;
  }

  :disabled {
    background-color: #0695FD;
    cursor: not-allowed;
  }
`;