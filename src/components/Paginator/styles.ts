import { convertPixelToRem } from "css-blocks-styled-components";
import styled from "styled-components";

export const Container = styled.div`
  float: right;
  margin-top: ${convertPixelToRem(30)};
`;

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
    background: #111111;
    color: white;
  }
`;