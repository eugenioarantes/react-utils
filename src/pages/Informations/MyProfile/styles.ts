import styled from 'styled-components';
import { Column } from '../../../components/Containers';

export const FormContainer = styled(Column)`
  margin: 0 auto;
  max-width: 1000px;
  padding: 20px;
  background: transparent;
  border-radius: 8px;

  .submit-btn {
    width: max(80%, 220px);
  }
`;
