import React, { useState } from "react";

import Parity from "./Parity";

function Counter(props) {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(Math.max(count - 1, 0));
  };

  return (
    <div>
      <h1 data-testid="count">{count}</h1>
      <div style={{ display: "flex" }}>
        <button
          data-testid="decrease-button"
          onClick={decreaseCount}
          style={{ width: "200px", fontSize: "30px" }}
        >
          -
        </button>
        <button
          data-testid="increase-button"
          onClick={increaseCount}
          style={{ width: "200px", fontSize: "30px" }}
        >
          +
        </button>
      </div>
      <Parity count={count} />
    </div>
  );
}

export default Counter;
