import { FC } from 'react';
import { Register } from '.';
import { RegisterContainer, RegistersCard } from './styles';

interface SingleRegisterProps {
  children?: never;
  register: Register;
}

const SingleRegister: FC<SingleRegisterProps> = ({ register }) => {
  return (
    <RegisterContainer>
      <RegistersCard>
        <h1>{register.name}</h1>
        <h1>{register.date}</h1>
      </RegistersCard>
    </RegisterContainer>
  );
};

export default SingleRegister;
