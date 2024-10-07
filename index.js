import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import Tailwind CSS here if set up locally
import App from './App';  // Import the main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // This matches the 'root' id in index.html
);