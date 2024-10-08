// src/App.js
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl mb-4">Happy Birthday Princess</h1>

      <div className="bouquet-container">
        {/* Your bouquet of flowers here */}
        <div className="flower" style={{ left: '0' }}>
          <div className="stem" style={{ height: '250px' }}></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="center"></div>
        </div>
        <div className="flower" style={{ left: '100px', top: '50px' }}>
          <div className="stem" style={{ height: '200px' }}></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="center"></div>
        </div>
        <div className="flower" style={{ left: '200px' }}>
          <div className="stem" style={{ height: '250px' }}></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="center"></div>
        </div>
      </div>

      <div className="header-container">
        <h2>Why I love you and some favorite memories</h2>
        <p>
          I love you so very much Princess. Here are some funny/favorite photos of mine.
          You are my favorite person to be around. You give me so much joy and satisfaction.
          I believe that whatever issues we run into, we can get through it together.
        </p>
        <img src="pictures/on_sholders.jpg" alt="Camila on my shoulders" className="w-48 rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default App;