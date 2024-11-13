import React, { useState } from 'react';

const A = () => {
  const [x, setX] = useState(10);  // Example initial value for x
  const [y, setY] = useState(20);  // Example initial value for y

  return (
    <div>
      <h1>Component A</h1>
      <p>x: {x}</p>
      <p>y: {y}</p>
      <B x={x} y={y} />
      <C x={x} y={y} />
    </div>
  );
};

export default A;
