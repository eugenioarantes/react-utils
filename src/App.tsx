import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '../src/styles/global';

import AppRoutes from './routes';

function App(): JSX.Element {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;