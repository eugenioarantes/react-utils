import { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Loading from '../../assets/login-loading.svg';

import InputForm from '../../components/InputForm';

import { useAuth } from '../../providers/Auth';

import { validateFormData } from '../../utils/formValidation';

import {
  Container,
  TitleSignIn,
  PageWrapper,
  InputLabel,
  StyledForm,
  StyledActionButton,
  LoadingImage,
  SpaceComponent,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const validator = Yup.object().shape({
  email: Yup.string().required('Mandatory email').email('Enter a valid email address'),
  password: Yup.string().required('Mandatory password'),
});

const Login: React.FC = () => {
  const [isLoaderOn, setIsLoaderOn] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(async (formData: SignInFormData) => {
      const { errors, hasError } = await validateFormData(validator, formData);
      formRef.current?.setErrors(errors);

      if (hasError) return;

      setIsLoaderOn(true);

      const success = await signIn(formData);

      if (!success) setIsLoaderOn(false);
  },
  [signIn],
  );

  return (
    <Container>
      <PageWrapper>
        <TitleSignIn>Please Sign In</TitleSignIn>

        <StyledForm ref={formRef} onSubmit={handleSubmit}>
          <InputLabel htmlFor="sign-login">Login</InputLabel>
          <InputForm name="email" id="sign-login" placeholder="email@email.com" />

          <InputLabel htmlFor="sign-password">Password</InputLabel>
          <InputForm name="password" id="sign-password" placeholder="********" type="password" />

          <StyledActionButton disabled={isLoaderOn} type="submit">
            <SpaceComponent />

            <span>Sign In</span>

            {isLoaderOn ? <LoadingImage src={Loading} alt="loading" /> : <SpaceComponent />}
          </StyledActionButton>
        </StyledForm>

      </PageWrapper>
    </Container>
  );
};

export default Login;
