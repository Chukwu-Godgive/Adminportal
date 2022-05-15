// React Dependencies should be imported here.
import React from 'react';
import ReactDOM from 'react-dom';

// CSS Files should be imported here.
import './Styles/index.css';

// Components and Pages should be imported here.
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);