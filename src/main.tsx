import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './styles/global.css';
import { AuthProvider } from '@/contexts/AuthProvider';
import { AppRouter } from '@/routes/AppRouter';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>
);
