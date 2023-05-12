import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  const handleCountChange = () => setCount(count + 1);
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleCountChange}>Click me!</button>
    </div>
  );
};
