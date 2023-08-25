import styled from 'styled-components';
import { convertPixelToRem } from 'css-blocks-styled-components';
import { TextareaAutosize } from '../../Material';

export const StyledTextarea = styled(TextareaAutosize)<{ $error: boolean }>`
  width: 100%;
  padding: ${convertPixelToRem(8)};
  border-radius: 6px;

  border-color: ${({ theme, $error }) =>
    $error ? theme.palette.error.light : theme.palette.grey[400]};

  color: ${({ theme }) => theme.palette.grey[700]};
  resize: none;
  outline-color: ${({ theme }) => theme.palette.primary.light};
`;
