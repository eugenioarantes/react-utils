import { convertPixelToRem } from 'css-blocks-styled-components';
import styled, { css } from 'styled-components';
import { TextField } from '../../Material';
import { Column, Row } from '../../Containers';

interface StyledColumnProps {
  $width?: number;
}

export const Input = styled(TextField)<{ $height?: number }>`
  > div {
    height: ${({ $height }) => $height && convertPixelToRem($height)};
    color: ${({ theme }) => theme.palette.grey[700]};
  }
`;

export const StyledColumn = styled(Column)<StyledColumnProps>`
  ${({ $width }) =>
    $width &&
    css`
      width: ${convertPixelToRem($width)};
      min-width: ${convertPixelToRem($width)};
    `};
`;

export const StyledRow = styled(Row)<StyledColumnProps>`
  justify-content: space-between;

  ${({ $width }) =>
    $width &&
    css`
      width: ${convertPixelToRem($width)};
      min-width: ${convertPixelToRem($width)};
    `};
`;
