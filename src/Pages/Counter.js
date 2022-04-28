import React, { useState } from "react";
import WindowWidth from "../Components/WindowWidth";
import ColorPicker from "../Components/ColorPicker";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <h2>This is my counter app</h2>
        <h4>The count is: {count}</h4>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <hr></hr>
      <WindowWidth />
      <hr></hr>
      <ColorPicker />
    </>
  );
}
