import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes';

import { AuthProvider } from './providers/Auth';
import { ToastProvider } from './providers/Toast';

function App(): JSX.Element {
  return (
    <BrowserRouter>
    <ToastProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ToastProvider>
    </BrowserRouter>
  );
}

export default App;