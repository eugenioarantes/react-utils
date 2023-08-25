import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global';
import { ToastProvider } from './Toast';
import { AppThemeProvider } from './Theme';

function AppProvider({ children }: { children: ReactNode }): JSX.Element {
  return (
    <BrowserRouter>
      <AppThemeProvider>
        <ToastProvider>
          <GlobalStyle />
          <>{children}</>
        </ToastProvider>
      </AppThemeProvider>
    </BrowserRouter>
  );
}

export default AppProvider;
