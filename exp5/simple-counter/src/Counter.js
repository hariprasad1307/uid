// src/Counter.js

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) setCount(value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-900 to-black">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full transform transition-transform duration-200 hover:scale-105">
        <h1 className="text-3xl font-bold text-center mb-6">Simple Counter</h1>
        <h2 className={`text-4xl font-semibold text-center mb-4 text-gray-700 transition-transform duration-500 ${count > 0 ? 'animate-bounce' : ''}`}>
          {count}
        </h2>
        <div className="flex justify-center space-x-4 mb-6">
          <button 
            onClick={increment} 
            className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transform transition-transform duration-300 hover:shadow-lg hover:scale-105"
          >
            Increment
          </button>
          <button 
            onClick={decrement} 
            className="px-5 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transform transition-transform duration-300 hover:shadow-lg hover:scale-105"
          >
            Decrement
          </button>
        </div>
        <input
          type="number"
          placeholder="Set Count"
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200 hover:shadow-sm"
        />
      </div>
    </div>
  );
};

export default Counter;
