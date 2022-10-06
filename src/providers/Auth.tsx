import React, { createContext, useCallback, useContext, useState } from 'react';
import { adminEmail, adminPassword } from '../services/envVariables';
import { useToast } from './Toast';

interface AuthState {
  token: string;
  user: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: string;
  signIn(credentials: SignInCredentials): Promise<boolean>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const fakeApiCall = async (email: string, password: string): Promise<AuthState> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (email === adminEmail && password === adminPassword) {
        resolve({ token: 'token123', user: 'user' });
      } else {
        reject();
      }
    }, 2000),
  );

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@TesteLogin:token');
    const user = localStorage.getItem('@TesteLogin:user');

    if (token && user) {
      return { token, user };
    }

    return {} as AuthState;
  });

  const { addToast } = useToast();

  const signIn = useCallback(
    async ({ email, password })=> {
      let success = true;

      try {
        const { token, user } = await fakeApiCall(email, password);

        localStorage.setItem('@TesteLogin:token', token);
        localStorage.setItem('@TesteLogin:user', user);

        setData({ token, user });

        addToast({
          title: 'Succeso!',
          type: 'success',
          description: 'Login realizado com sucesso!',
        });
      } catch (err) {
        success = false;
        addToast({
          title: 'Erro ao realizar Login!',
          type: 'error',
          description: 'Dados de login incorretos!',
        });

      }

      return success;
    },
    [addToast],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@TesteLogin:token');
    localStorage.removeItem('@TesteLogin:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AutoProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
