import React, { useState, useEffect } from 'react';

function Camera() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 1000) {
        setCount(count + 1);
      }
    }, .5); 

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

export default Camera;