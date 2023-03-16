import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { Row } from '../Containers';

export const StyledRow = styled(Row)`
  background: #2b2a2a;
  padding: 20px 20px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 20px;
`;

export const StyledIconButton = styled(IconButton)`
  svg {
    color: #fff;
  }
`;
