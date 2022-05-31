import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { FiEye, FiEyeOff } from 'react-icons/fi';

import { useToggle } from '../../hooks/toggle';

import { Container, InputContainer, Error, ShowPasswordButton } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  backgroundColor?: string;
}

const InputForm: React.FC<InputProps> = ({
  name,
  type = 'text',
  backgroundColor = 'transparent',
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, error, registerField } = useField(name);

  const { isOn: isFocused, turnOn: handleFocus, turnOff: handleBlur } = useToggle();

  const { isOn: showPassword, toggle: toggleShowPassword } = useToggle();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  return (
    <Container>
      <InputContainer
        $isErrored={!!error}
        $isFocused={isFocused}
        $backgroundColor={backgroundColor}
      >
        <input
          type={inputType}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
          {...rest}
        />

        {isPassword && (
          <ShowPasswordButton type="button" onClick={toggleShowPassword}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </ShowPasswordButton>
        )}
      </InputContainer>
      <Error>{error}</Error>
    </Container>
  );
};

export default InputForm;
