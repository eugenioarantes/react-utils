import { useCallback, useState } from 'react';
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
import { Formik } from 'formik';

interface SignInFormData {
  email: string;
  password: string;
}

const validator = Yup.object().shape({
  email: Yup.string().required('Mandatory email').email('Enter a valid email address'),
  password: Yup.string().required('Mandatory password'),
});

const FORM_INITIAL_VALUES = {
  email: '',
  password: '',
}

const Login: React.FC = () => {
  const [isLoaderOn, setIsLoaderOn] = useState(false);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(async (formData: SignInFormData) => {
      const { hasError } = await validateFormData(validator, formData);

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

        <Formik
          initialValues={FORM_INITIAL_VALUES}
          validationSchema={validator}
          onSubmit={(values) => handleSubmit(values)}
        >
        {({ errors, touched, handleBlur }) => (
          <StyledForm>
            <InputLabel htmlFor="sign-login">Login</InputLabel>
            <InputForm 
              name="email"
              id="sign-login"
              placeholder="email@email.com"
              error={errors.email}
              touched={touched.email}
              blur={handleBlur}
            />

            <InputLabel htmlFor="sign-password">Password</InputLabel>
            <InputForm
              name= "password"
              id="sign-password"
              placeholder="********"
              type="password"
              error={errors.password}
              touched={touched.password}
              blur={handleBlur}
            />

            <StyledActionButton disabled={isLoaderOn} type="submit">
              <SpaceComponent />

              <span>Sign In</span>

              {isLoaderOn ? <LoadingImage src={Loading} alt="loading" /> : <SpaceComponent />}
            </StyledActionButton>
          </StyledForm>
         )}
         </Formik>
      </PageWrapper>
    </Container>
  );
};

export default Login;
