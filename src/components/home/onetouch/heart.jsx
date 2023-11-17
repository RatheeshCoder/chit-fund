import React, { useState, useEffect } from 'react';

function Heart() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 50) {
        setCount(count + 1);
      }
    }, 50); 

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

export default Heart;