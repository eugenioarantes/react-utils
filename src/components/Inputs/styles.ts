import styled from 'styled-components';
import { FormControlLabel } from '../Material';

export const StyledCheckBox = styled(FormControlLabel)`
  white-space: nowrap;
  color: ${({ theme, color }) => color ?? theme.palette.grey[700]};
`;
