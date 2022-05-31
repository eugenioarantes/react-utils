import React, { ButtonHTMLAttributes } from 'react';
import { Button } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ActionButton: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Button type="button" {...rest}>
    {children}
  </Button>
);

export default ActionButton;
