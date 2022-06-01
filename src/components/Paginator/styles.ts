import styled, { css } from "styled-components";

export const Button = styled.button`
  border-radius: 50%;
  background: lightgray;
  color: blue;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  &:hover {
    background: gray;
  }
  &:disabled {
    background: darkblue;
    color: white;
  }
`;