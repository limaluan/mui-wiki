import { BrowserRouter } from 'react-router-dom';
import { AppThemeProvider } from './shared/contexts';
import { AppRoutes } from './routes';
import { SideNav } from './shared/components';

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <SideNav>
          <AppRoutes />
        </SideNav>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
