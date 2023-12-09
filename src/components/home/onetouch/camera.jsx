import React, { useState, useEffect } from "react";

function Camera() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const targetCount = 1000;
    const duration = 500;
    const steps = 60;

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
      <h1>{count}+</h1>
    </div>
  );
}

export default Camera;
