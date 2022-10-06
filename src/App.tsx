import AppRoutes from './routes';


// import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
// import { theme } from './styles/theme';

// import { AuthProvider } from './providers/Auth';
// import { ToastProvider } from './providers/Toast';
// import { GlobalStyle } from './styles/global';

import AppProvider from './providers';

function App(): JSX.Element {
  return (
    // <BrowserRouter>
    //   <ThemeProvider theme={theme}>
    //     <GlobalStyle />

    //     <ToastProvider>

    //       <AuthProvider>
    //         <AppRoutes />
    //       </AuthProvider>

    //     </ToastProvider>

    //   </ThemeProvider>
    // </BrowserRouter>
    <AppProvider>
     <AppRoutes />
    </AppProvider>
  );
}
export default App;
