import React from 'react';
import ReactDOM from 'react-dom/client';
import './resources/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './views/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
