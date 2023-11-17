import React, { useState, useEffect } from 'react';

function Prize() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 500) {
        setCount(count + 1);
      }
    }, 10); 

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

export default Prize;