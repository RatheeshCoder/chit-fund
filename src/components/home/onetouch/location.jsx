import React, { useState, useEffect } from 'react';

function Location() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 4) {
        setCount(count + 1);
      }
    }, 100); 

    return () => {
      clearInterval(interval); 
    };
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Location;