import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {store} from "./Redux/store"
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Provider store={store}>
<ChakraProvider>
      <App />
    </ChakraProvider>
</Provider>
</BrowserRouter>
);


