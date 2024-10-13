// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './i18n/i18n';  // Import i18n config

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);