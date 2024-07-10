import React, { useState, useEffect } from 'react';
import "./counter.css"

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log(`Count is ${count}`);
  }, [count, step]);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  const handleStepChange = (event) => {
    setStep(parseInt(event.target.value));
  };

  return (
    <div className="container">
      <h1 className="title">Counter</h1>
      <p className="counter-value">Count: {count}</p>
      <div className="controls">
        <input
          type="number"
          value={step}
          onChange={handleStepChange}
          className="step-input"
        />
        <button className="button" onClick={increment}>Increment</button>
        <button className="button" onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
  
};

export default Counter;
