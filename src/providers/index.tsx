import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global';

function AppProvider({ children }: { children: ReactNode }): JSX.Element {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <>{children}</>
    </BrowserRouter>
  );
}

export default AppProvider;
