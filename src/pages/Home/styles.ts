import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  button {
    width: 200px;
    height: 40px;

    background: #11af22;
    color: #ffffff;
    border: 0;
    border-radius: 10px;

    font-size: 18px;
    font-weight: 600;

    cursor: pointer;
    transition: background-color 0.5s;

    :hover {
      background: #11da22;
    }
  }
`;
