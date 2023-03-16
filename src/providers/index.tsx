import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global';
import { ToastProvider } from './Toast';

function AppProvider({ children }: { children: ReactNode }): JSX.Element {
  return (
    <BrowserRouter>
      <ToastProvider>
        <GlobalStyle />
        <>{children}</>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default AppProvider;
