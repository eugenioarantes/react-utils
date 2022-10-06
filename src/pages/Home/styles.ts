import styled, { css } from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: space-between;


  margin: 0 auto;
  margin-top: 30px;
  width: 70%;

  button {
    width: 150px;
    background-color: #333;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    transition: background-color 0.5s;

    :hover {
      background-color: #555;
    }
  }
`;