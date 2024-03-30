import './index.css';

import React from 'react';
import AuthProvider from './contexts/authContext';
import ReactDOM from 'react-dom/client';

import AppRoutes from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </React.StrictMode>,
);
