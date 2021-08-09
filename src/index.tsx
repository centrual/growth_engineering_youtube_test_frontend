import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import reportWebVitals from './reportWebVitals';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';

import './assets/styles/fonts.css';
import './assets/styles/colors.css';
import './assets/styles/global.css';

const rootElement = document.querySelector('#root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
