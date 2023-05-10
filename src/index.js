import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Menu from './components/Menu'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu/>
    </BrowserRouter>
  </React.StrictMode>
);
