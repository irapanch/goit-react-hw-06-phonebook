import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import 'modern-normalize';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Global } from './styles/Global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
    <Global />
  </ThemeProvider>
);
