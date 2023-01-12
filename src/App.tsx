import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from './providers/Toast';

import AppRoutes from './routes';

function App(): JSX.Element {
  return (
    <BrowserRouter>
    <ToastProvider>
      <AppRoutes />
    </ToastProvider>
    </BrowserRouter>
  );
}

export default App;