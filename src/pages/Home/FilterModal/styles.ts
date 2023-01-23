import styled from 'styled-components';

import { getPadding } from 'css-blocks-styled-components';

import { Column } from '../../../components/Containers';

export const Container = styled(Column)`
  ${getPadding(20, 20)}

  width: max(40vw, 290px);
  max-height: 90vh;
`;
