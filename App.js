import React from 'react';
import Flower from './Flower';
import './index.css';  // Ensure Tailwind CSS is imported if configured locally

function App() {
  return (
    <div className="App">
      <Flower />  {/* This renders the flower component */}
    </div>
  );
}

export default App;