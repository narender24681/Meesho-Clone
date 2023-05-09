import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import { store } from './Redux/store';
import { Provider } from "react-redux"
import { CartProvider } from './Components/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider>
       <CartProvider>
    <App />
    </CartProvider>
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);
