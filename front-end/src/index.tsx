import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContentProvider } from './context/UserContext';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './style/GlobalStyle';
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './helpers/queryClient';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <UserContentProvider>
          <App />
        </UserContentProvider>
      </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
