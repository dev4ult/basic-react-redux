import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './app/store.js';
import './css/index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
