import React, { useState, useEffect } from 'react';

function NumberCounter() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 3000) {
        setCount(count + 1);
      }
    }, .01); 

    return () => {
      clearInterval(interval); 
    };
  }, [count]);

  return (
    <div>
      <h1>{count}+</h1>
    </div>
  );
}

export default NumberCounter;