import { convertPixelToRem, getMargin } from 'css-blocks-styled-components';
import styled, { css } from 'styled-components';

interface BagOfWordsProps {
  $isErrored: boolean;
}

export const BagOfWordsContainer = styled.div`
  width: 48%;
`;

export const LabelBagOfWords = styled.label`
  display: block;
  margin-top: ${convertPixelToRem(32)};
  color: #656565;
  text-transform: uppercase;
  font-size: ${convertPixelToRem(16)};
`;

export const SpanTextWarning = styled.div`
  margin-top: ${convertPixelToRem(8)};
  margin-bottom: ${convertPixelToRem(8)};
  padding-right: ${convertPixelToRem(25)};
  color: #aaa;
  font-size: ${convertPixelToRem(15)};
`;

export const TagsContainer = styled.div<BagOfWordsProps>`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  &:focus-within {
    border: 1px solid #a3a3a3;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;
  }

  li {
    width: auto;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 0 8px;
    font-size: 14px;
    list-style: none;
    border-radius: 6px;
    margin: 0 8px 8px 0;
    background: #0695FD;
  }

  ${({ $isErrored }) =>
    $isErrored &&
    css`
      border: 1px solid #c53030;
    `}
`;

export const TagSpan = styled.div`
  margin-top: ${convertPixelToRem(2)};
`;

export const WordsContainer = styled.div`
  height: ${convertPixelToRem(165)};
  overflow-y: auto;
`;

export const InputOfWords = styled.input`
  ${getMargin(10, 0)};
  flex: 1;
  border: none;
  font-size: 14px;
  padding: 4px 0 0 0;
  background: transparent;

  &:focus {
    outline: transparent;
  }
`;

export const RemoveTagSpan = styled.div`
  display: block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-size: 14px;
  margin-left: 8px;
  color: #fff;
  cursor: pointer;
`;

export const Error = styled.small`
  color: #c53030;
  padding-left: ${convertPixelToRem(16)};
`;