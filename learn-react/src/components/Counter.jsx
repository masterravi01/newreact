import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(12);
  const addValue = () => {
    if (counter < 20) {
      console.log("value added", counter + 1, Math.random());
      setCounter(counter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      console.log("value removed", counter - 1, Math.random());
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h2>Counter value :{counter}</h2>

      <button onClick={addValue}>Add</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove</button>
    </>
  );
};

export default Counter;
