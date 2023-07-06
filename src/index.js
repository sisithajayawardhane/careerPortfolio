import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './styles/tailwind.css';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Lato:300,400,700'],
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>


);


