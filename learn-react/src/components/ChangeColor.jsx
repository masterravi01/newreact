import React from "react";
import { useState } from "react";

const ChangeColor = () => {
  const [color, setColor] = useState("green");

  const changeColor = (c) => {
    setColor(c);
  };
  return (
    <>
      <h1
        className={`bg-${color}-400 text-white p-4 rounded-xl`}
        style={{ backgroundColor: color }}
      >
        Hello World !
      </h1>
      <button onClick={() => changeColor("red")}>Change to Red</button>
      <button onClick={() => setColor("blue")}>Change to Blue</button>
    </>
  );
};

export default ChangeColor;
