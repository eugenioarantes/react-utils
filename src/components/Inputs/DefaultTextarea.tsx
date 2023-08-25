import styled from 'styled-components';

import { TextareaAutosize } from '../Material';

export const DefaultTextarea = styled(TextareaAutosize)`
  padding: 8px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.palette.grey[400]};
  background: ${({ theme }) => theme.palette.grey[50]};
  color: ${({ theme }) => theme.palette.grey[700]};
  resize: none;
  outline-color: ${({ theme }) => theme.palette.primary.light};
`;
