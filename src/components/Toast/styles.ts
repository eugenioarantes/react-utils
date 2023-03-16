import styled from 'styled-components';
import { QUERIES } from '../../utils/constants';

export const Container = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
  /* to be on top of MUI modals */
  z-index: 99999;
  ${QUERIES.PHONES} {
    padding: 10px;
  }
`;
