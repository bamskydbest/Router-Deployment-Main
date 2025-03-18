import React, { useMemo, useState } from "react";

const ExpensiveCalculationComponent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("Performing expensive calculation...");
    return num * 2;
  };
  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Memoized value : {memoizedValue} </p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(otherState + 1)}>
        Update Other State
      </button>
    </div>
  );
};

export default ExpensiveCalculationComponent;
