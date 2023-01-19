import AppWrapper from './components/AppWrapper';
import AppProvider from './providers';

import AppRoutes from './routes';

function App(): JSX.Element {
  return (
    <AppProvider>
      <AppWrapper>
        <AppRoutes />
      </AppWrapper>
    </AppProvider>
  );
}

export default App;
