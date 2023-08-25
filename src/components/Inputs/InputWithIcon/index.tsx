import { FC, InputHTMLAttributes, MutableRefObject, useCallback, useState } from 'react';

import { useToggle } from '../../../hooks/toggle';
import { VisibilityIcon, VisibilityOffIcon } from '../../Icons';

import { StyledInput, Container, PasswordToggleButton } from './styles';

interface CustomInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: boolean;
  icon?: FC;
  inputRef?: MutableRefObject<HTMLInputElement | null>;
}

const Input: React.FC<CustomInput> = ({
  name,
  icon: Icon,
  value,
  inputRef,
  error = false,
  type,
  ...rest
}) => {
  const [inputType, setInputType] = useState(type || 'text');

  const { isOn, turnOn, turnOff } = useToggle();

  const togglePasswordViz = useCallback(() => {
    setInputType((old) => (old === 'password' ? 'text' : 'password'));
  }, []);

  const isPassword = type === 'password';

  return (
    <Container hasError={error} focusOn={isOn} hasText={!!value}>
      {Icon && <Icon />}

      <StyledInput
        ref={inputRef}
        onBlur={turnOff}
        onFocus={turnOn}
        name={name}
        value={value}
        type={inputType}
        {...rest}
      />

      {isPassword && (
        <PasswordToggleButton type="button" onClick={togglePasswordViz}>
          {inputType === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </PasswordToggleButton>
      )}
    </Container>
  );
};
export default Input;
