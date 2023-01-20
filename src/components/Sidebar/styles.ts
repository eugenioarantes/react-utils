import {
  convertPixelToRem,
  flex,
  getBoxWidthAndHeight,
  getPadding,
  getScrollbarStyle,
} from 'css-blocks-styled-components';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { grey } from '@mui/material/colors';

import { Row, Column } from '../Containers';

import { QUERIES } from '../../utils/constants';

interface CircleProps {
  $color: string;
  $size: number;
}

export const SIDE_BAR_WIDTH = 270;
export const CLOSED_SIDE_BAR_WIDTH = 50;

export const Container = styled(Column)`
  background: #4a4a4a;

  height: 100%;
  width: ${SIDE_BAR_WIDTH}px;

  ${getPadding(20, 15, 15)}

  overflow-y: auto;

  &.closed {
    ${getPadding(20, 5, 15)}

    animation: reduceToZero 0.65s ease forwards;

    @keyframes reduceToZero {
      from {
        width: ${SIDE_BAR_WIDTH}px;
      }
      to {
        width: ${CLOSED_SIDE_BAR_WIDTH}px;
      }
    }
  }

  ${QUERIES.PHONES} {
    position: absolute;
    top: 0;
    /* to make sure we can click it - future: adjust positioning to remove this */
    z-index: 10;
    ${getPadding(20, 15, 15)}

    animation: growSideBar 0.25s ease forwards;

    @keyframes growSideBar {
      to {
        width: 250px;
      }
      from {
        width: 50px;
      }
    }
  }

  ${getScrollbarStyle({
    scrollColor: grey[300],
    backgroundColor: '#4a4a4a',
  })}
`;

export const Header = styled(Row)`
  &,
  > button {
    color: #fff;
  }
`;

export const Circle = styled.span<CircleProps>`
  border-radius: 50%;
  flex-shrink: 0;
  border: 1px solid #e8e6e6;

  ${({ $color }) =>
    css`
      background: ${$color};
    `};

  ${({ $size }) =>
    css`
      ${getBoxWidthAndHeight($size)}
    `};
`;

export const MobileWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  /* to make sure we can click it - future: adjust positioning to remove this */
  z-index: 10;
`;

export const Workspace = styled.span`
  font-weight: 700;
  font-size: ${convertPixelToRem(18)};
  line-height: ${convertPixelToRem(20)};
  color: #fff;
`;

export const SettingsButton = styled(Link)`
  ${flex.middle}
  width: 70%;
  margin: 0 auto;
  height: ${convertPixelToRem(30)};
  border: 1px solid #999;
  border-radius: 15px;
  background: transparent;
  transition: background-color 0.25s ease, color 0.25s ease;

  font-weight: 600;
  font-size: ${convertPixelToRem(15)};
  line-height: ${convertPixelToRem(18)};
  color: #fff;

  ${QUERIES.HOVER_ENABLED} {
    &:hover {
      background-color: #333;
    }
  }
`;

export const TaskItem = styled(Link)`
  font-style: italic;
  font-weight: 800;
  font-size: ${convertPixelToRem(15)};
  line-height: ${convertPixelToRem(20)};

  color: #fff;
  background: transparent;
  border: 0;
`;

export const ActionButton = styled.button`
  display: flex;
  align-content: center;

  background: transparent;
  border: 0;
  gap: ${convertPixelToRem(12)};
  color: #fff;

  > span {
    font-weight: 700;
  }

  svg {
    ${getBoxWidthAndHeight(20)}
  }
`;

export const TaskName = styled.span`
  color: #fff;

  font-weight: 600;
  font-size: ${convertPixelToRem(12)};
  line-height: ${convertPixelToRem(16)};
  margin-left: ${convertPixelToRem(35)};
`;
