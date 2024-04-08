import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={Theme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>,
);
