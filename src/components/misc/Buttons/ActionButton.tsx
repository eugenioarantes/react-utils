import { FC, ButtonHTMLAttributes } from 'react';
import styled, { Colors, css } from 'styled-components';
import { convertPixelToRem } from 'css-blocks-styled-components';

import { QUERIES } from '../../../utils/appConstants';

type ButtonSize = 'small' | 'large';

type ButtonType = 'PrimaryAction' | 'SecondaryAction' | 'NegativeAction';

interface ActionButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  size?: ButtonSize;
  type: ButtonType;
}

interface ButtonProps {
  $size?: ButtonSize;
  $type: ButtonType;
}

type ButtonTypeToConfig = {
  [key in ButtonType]: {
    border: keyof Colors;
    background: keyof Colors;
    text: keyof Colors;
    hoverBackground: keyof Colors;
  };
};

const buttonTypeToConfig: ButtonTypeToConfig = {
  PrimaryAction: {
    background: 'action',
    border: 'action',
    text: 'actionText',
    hoverBackground: 'actionHover',
  },
  SecondaryAction: {
    background: 'transparent',
    border: 'action',
    text: 'action',
    hoverBackground: 'actionInvertedHover',
  },
  NegativeAction: {
    background: 'transparent',
    border: 'invalid',
    text: 'invalid',
    hoverBackground: 'invalidHover',
  },
};

const Button = styled.button.attrs({
  type: 'button',
})<ButtonProps>`
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.boxShadows.button};
  letter-spacing: 0.05em;
  text-transform: uppercase;

  min-width: ${convertPixelToRem(70)};
  height: ${({ $size }) => convertPixelToRem($size === 'large' ? 36 : 27)};

  transition: background-color 0.3s ease;

  ${({ theme, $type }) => css`
    border: 2px solid ${theme.colors[buttonTypeToConfig[$type].border]};
    color: ${theme.colors[buttonTypeToConfig[$type].text]};
    background-color: ${theme.colors[buttonTypeToConfig[$type].background]};

    &:hover {
      background-color: ${theme.colors[buttonTypeToConfig[$type].hoverBackground]};
    }
  `};

  ${QUERIES.TABLETS} {
    border-radius: 4px;
  }
`;

const ActionButton: FC<ActionButtonProps> = ({ children, size, type, ...buttonProps }) => {
  return (
    <Button $size={size} $type={type} {...buttonProps}>
      {children}
    </Button>
  );
};

export default ActionButton;
