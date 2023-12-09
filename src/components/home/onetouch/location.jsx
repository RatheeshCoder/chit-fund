import React, { useState, useEffect } from 'react';

function Location() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const targetCount = 4;
    const duration = 1000; // 1 second
    const steps = 40; // Number of steps

    const increment = Math.ceil(targetCount / steps);
    const interval = duration / steps;

    const updateCount = () => {
      if (count + increment < targetCount) {
        setCount((prevCount) => prevCount + increment);
      } else {
        setCount(targetCount);
        clearInterval(timer);
      }
    };

    const timer = setInterval(updateCount, interval);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Location;
