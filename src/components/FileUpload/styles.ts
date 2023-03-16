import styled from 'styled-components';
import {
  convertPixelToRem,
  flex,
  flexAlignCenterColumn,
  getBoxWidthAndHeight,
  getPadding,
} from 'css-blocks-styled-components';

import { Column, Row } from '../Containers';
import { scrollBarStyled } from '../../styles/snippets';

interface DropzoneWrapperProps {
  $width: string;
}

export const DropzoneWrapper = styled(Column)<DropzoneWrapperProps>`
  width: ${({ $width }) => $width};
  height: auto;

  user-select: none;
`;

export const Dropzone = styled.div`
  ${flexAlignCenterColumn}
  border: 1px dashed ${({ theme }) => theme.palette.grey[500]};
  border-radius: 4px;
  padding: 12px;
  cursor: pointer;

  > div {
    width: 50%;
  }
`;

export const ListWrapper = styled(Row)`
  overflow-x: auto;
  padding-bottom: ${convertPixelToRem(8)};

  ${scrollBarStyled}
`;

export const FileInfo = styled(Column)`
  position: relative;
  border: 1px solid ${({ theme }) => theme.palette.grey[500]};
  border-radius: 4px;
  ${getPadding(10)}
  max-width: 100px;
  height: 100px;
  color: ${({ theme }) => theme.palette.grey[700]};
  overflow: hidden;
  flex-shrink: 0;

  > svg {
    ${getBoxWidthAndHeight(28)}
    color: hsl(214, 92%, 70%);
  }

  > span {
    font-size: ${convertPixelToRem(12)};
    text-align: center;
    word-wrap: break-word;
    max-width: 100%;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;

  ${flex.middle}
  ${getBoxWidthAndHeight(15)}

  background: transparent;
  border: 0;

  > svg {
    ${getBoxWidthAndHeight(15)}

    :hover {
      transition: color 0.3s;
      color: red;
    }
  }
`;

export const ErrorNotice = styled.span`
  color: ${({ theme }) => theme.palette.error.main};
`;

export const ErrorContainer = styled(Column)`
  > span {
    text-align: center;
  }

  svg {
    ${getBoxWidthAndHeight(16)}
  }

  > button {
    flex: 0;
    ${getBoxWidthAndHeight(26)}
  }
`;

export const BrowseMessage = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 25px;
  border-radius: 8px;
  background: ${({ theme }) => theme.palette.primary.main};
  color: #fff;

  font-weight: 700;
  font-size: ${convertPixelToRem(14)};
`;
