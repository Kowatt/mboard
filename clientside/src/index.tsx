import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NextUIProvider, createTheme } from '@nextui-org/react';


ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider theme={createTheme({type: 'dark'})}>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

