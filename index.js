import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Include Tailwind CSS
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Make sure this matches <div id="root"></div> in index.html
);
