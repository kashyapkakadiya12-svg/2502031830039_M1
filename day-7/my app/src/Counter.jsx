import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increase}>
        Increase
      </button>

      <button onClick={handleDecrease}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;