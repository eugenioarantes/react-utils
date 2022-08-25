import { convertPixelToRem } from "css-blocks-styled-components";
import styled from "styled-components";

export const Container = styled.div`
  float: right;
  margin-top: ${convertPixelToRem(30)};
`;

export const Button = styled.button`
  color: blue;
  background: lightgray;
  
  width: 30px;
  height: 30px;
  
  border: none;
  border-radius: 50%;

  cursor: pointer;

  &:hover {
    background: gray;
  }
  &:disabled {
    background: #111111;
    color: white;
  }
`;