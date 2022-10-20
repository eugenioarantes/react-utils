import styled, { css, keyframes, Keyframes } from 'styled-components';

interface ButtonProps {
  $isSelected: boolean;
  $status: string;
}

interface BlockColorProps {
  $status: string;
}

const leftAnimation = (): Keyframes => keyframes`
  from {
    margin-left: 0;
  }
  to {
    margin-left: 50%;
  }
`;

const rightAnimation = (): Keyframes => keyframes`
  from {
    margin-left: 50%;
  }
  to {
    margin-left: 0;
  }
`;


export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Switch = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  width: 170px;
  padding: 4px;

  border: 0.5px solid #555555;
  border-radius: 10px;
`;

export const Button = styled.button<ButtonProps>`
  position: relative;

  width: 80px;
  height: 30px;
  cursor: pointer;

  color: #555;

  border: 0;
  border-radius: 10px;

  background: transparent;

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      color: #fff;
    `};

  ${({ $status }) =>
    $status === '' &&
    css`
     :first-of-type {
       color: #fff;
     }
  `};

  
  span {
    transition: color 0.6s;
    font-weight: bold;

    ${({ $isSelected }) =>
    !$isSelected &&
    css`
        :hover {
          color: #000;
        }
    `};
    
  }
`;

export const BlockColor = styled.div<BlockColorProps>`
  position: absolute;
  
  width: 80px;
  height: 30px;
  background: #19c2ff;

  border: 0;
  border-radius: 10px;

  ${({ $status }) => {
    if ($status === '') return css``;

    return $status === 'No'
      ? css`
          animation: ${rightAnimation()} 0.5s forwards;
        `
      : css`
          animation: ${leftAnimation()} 0.5s forwards;
        `;
  }}
`;