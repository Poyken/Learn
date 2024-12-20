import React from "react";

export default function Count() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button>-</button>
    </div>
  );
}
