import React from 'react';

function Flower() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      {/* Flower Stem */}
      <div className="w-1 bg-green-600 h-64 rounded-full relative">
        {/* Leaf */}
        <div className="w-8 h-4 bg-green-400 absolute -left-10 top-1/2 rounded-full rotate-45"></div>
        <div className="w-8 h-4 bg-green-400 absolute -right-10 top-1/2 rounded-full -rotate-45"></div>
      </div>

      {/* Flower Center */}
      <div className="relative -top-32">
        <div className="w-16 h-16 bg-yellow-400 rounded-full border-4 border-yellow-500 flex items-center justify-center">
          {/* Center of Flower */}
          <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
        </div>

        {/* Petals */}
        <div className="absolute w-full h-full top-0 left-0 flex flex-wrap justify-center">
          <div className="w-10 h-10 bg-red-300 rounded-full absolute -top-12 -left-8"></div>
          <div className="w-10 h-10 bg-red-300 rounded-full absolute -top-12 left-8"></div>
          <div className="w-10 h-10 bg-red-300 rounded-full absolute top-6 -left-12"></div>
          <div className="w-10 h-10 bg-red-300 rounded-full absolute top-6 left-12"></div>
        </div>
      </div>
    </div>
  );
}

export default Flower;