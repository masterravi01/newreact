import "./App.css";
import Chai from "./Chai";
import { useState } from "react";
import Card from "./components/Card";
import Password from "./components/Password";

function App() {
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
  const changeColor = (c) => {
    setColor(c);
  };
  const userDetails = {
    no: 1,
    marks: [1, 2, 3, 4],
    name: "rsp",
  };
  const subs = ["a", "d", "c"];
  const [color, setColor] = useState("green");
  return (
    <>
      <Card name="ravii" btnName="FindMe" user={userDetails} subjects={subs} />
      <Card />
      <h1
        className={`bg-${color}-400 text-white p-4 rounded-xl`}
        style={{ backgroundColor: color }}
      >
        Hello World !
      </h1>
      <button onClick={() => changeColor("red")}>Change to Red</button>
      <button onClick={() => setColor("blue")}>Change to Blue</button>

      <h2>Counter value :{counter}</h2>

      <button onClick={addValue}>Add</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove</button>
      <Chai />
      <Password />
    </>
  );
}

export default App;
