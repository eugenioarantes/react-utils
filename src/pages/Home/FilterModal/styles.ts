import { getPadding } from 'css-blocks-styled-components';
import styled from 'styled-components';

import Button from '@mui/material/Button';

import { Column } from '../../../components/Containers';

export const Container = styled(Column)`
  ${getPadding(20, 20)}

  width: max(40vw, 290px);
  max-height: 90vh;
`;

export const StyledButton = styled(Button)`
  background-color: #555 !important;

  :hover {
    transition: background-color 0.5s ease;
    background-color: #777 !important;
  }
`;
