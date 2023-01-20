import styled from 'styled-components';
import { convertPixelToRem } from 'css-blocks-styled-components';
import { Column } from '../../Containers';

export const UsersWrapper = styled(Column)`
  padding-left: ${convertPixelToRem(30)};
`;
