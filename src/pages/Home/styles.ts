import { convertPixelToRem, flex } from 'css-blocks-styled-components';
import styled from 'styled-components';

export const RegistersList = styled.div`
  margin-top: ${convertPixelToRem(25)};
`;

export const RegisterContainer = styled.div`
  background: #393939;
  box-shadow:'7px 7px 12px 3px rgba(102,102,102,0.04)';
  border-radius: 5px;
  height: ${convertPixelToRem(65)};

  & + & {
    margin-top: ${convertPixelToRem(35)};
  }
`;

export const RegistersCard = styled.div`
  ${flex.between}
  align-items: center;
  height: ${convertPixelToRem(60)};

  margin: 0 auto;
  max-width: 85%;

  h1 {
    font-size: ${convertPixelToRem(28)};
    color: #D9D9D9;
  }
`;