import { convertPixelToRem, flexAlignCenterColumn, getMargin } from 'css-blocks-styled-components';
import styled, { css } from 'styled-components';

interface DropzoneProps {
  $isErrored: boolean;
}

export const DropzoneContainer = styled.div`
  margin-top: ${convertPixelToRem(50)};

  > span {
    display: inline-block;
    ${getMargin(0, 0, 12, 20)}
    font-size: ${convertPixelToRem(16)};
    color: #656565;
  }
`;

export const Dropzone = styled.div<DropzoneProps>`
  ${flexAlignCenterColumn}
  height: ${convertPixelToRem(150)};
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background-color: #e3faf4;
  cursor: pointer;

  font-size: ${convertPixelToRem(19)};
  font-weight: 500;
  color: #6b6b6b;

  svg {
    width: 70px;
    height: 70px;
  }

  ${({ $isErrored }) =>
    $isErrored &&
    css`
      border: 1px solid #c53030;
    `}
`;

export const FileInfo = styled.div`
  margin-top: ${convertPixelToRem(8)};
`;

export const Error = styled.small`
  color: #c53030;
  padding-left: ${convertPixelToRem(16)};
`;
