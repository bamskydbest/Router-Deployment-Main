import React, { useState } from "react";
import ChildComponent from "../components/ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);
  return (
    <div>
      <h1>React.memo Example</h1>
      <ChildComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(otherState + 1)}>
        Update Other State
      </button>
    </div>
  );
};

export default ParentComponent;
