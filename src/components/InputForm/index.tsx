import { FocusEvent } from 'react';
import { Field, FieldAttributes } from 'formik';

import { FiEye, FiEyeOff } from 'react-icons/fi';

import { useToggle } from '../../hooks/toggle';

import { Container, InputContainer, Error, ShowPasswordButton } from './styles';

interface InputProps extends FieldAttributes<any> {
  error?: string;
  touched?: boolean;
  blur?: (event: FocusEvent) => void;
  backgroundColor?: string;
  type?: string;
}

const InputForm: React.FC<InputProps> = ({
  backgroundColor = 'transparent',
  type = 'text',
  error,
  touched,
  blur,
  ...rest
}) => {
  const { isOn: isFocused, turnOn: handleFocus, turnOff: handleFocusOff } = useToggle();

  const { isOn: showPassword, toggle: toggleShowPassword } = useToggle();

  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  const errored = error && touched

  const handleBlur = (event: FocusEvent): void => {
    handleFocusOff()

    if (blur) blur(event)
  }

  return (
    <Container>
      <InputContainer
        $isErrored={!!error}
        $isFocused={isFocused}
        $backgroundColor={backgroundColor}
      >
        <Field
          type={inputType}
          onFocus={handleFocus}
          onBlur={(event: FocusEvent) => handleBlur(event)}
          {...rest}
        />

        {isPassword && (
          <ShowPasswordButton type="button" onClick={toggleShowPassword}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </ShowPasswordButton>
        )}
      </InputContainer>
      <Error>{errored ? error : ''}</Error>
    </Container>
  );
};

export default InputForm;
