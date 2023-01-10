import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 50px;
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;

  button {
    border: 0;
    border-radius: 15px;
    width: 100px;
    height: 40px;
    cursor: pointer;

    :nth-child(1) {
      background: green;
    }

    :nth-child(2) {
      background: red;
    }

    :nth-child(3) {
      background: yellow;
    }
  }
`;

export const ResultShow = styled.div`
  margin-top: 50px;
`;