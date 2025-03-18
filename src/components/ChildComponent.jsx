import React, { memo } from "react";

const ChildComponent = memo((prop) => {
  const count = prop.count;
  console.log("ChildComponent Rendered");
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
});
ChildComponent.displayName = "child component";

export default ChildComponent;
