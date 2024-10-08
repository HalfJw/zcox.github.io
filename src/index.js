import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'; // Import your main App component
import './index.css'; // Optional: Include your CSS file for global styles

// Render the App component into the DOM
ReactDOM.render(
  <React.StrictMode>
    <BouquetPage />
  </React.StrictMode>,
  document.getElementById('root') // This ID should match the one in index.html
);