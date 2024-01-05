import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [num2, setNum] = useState(0);
  const [num1, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function InputNumber(e) {
    let input = e.target.value;
    if (num2 === 0) {
      setNum(input);
    } else {
      setNum(num2 + input);
    }
  }

  function Clear() {
    setNum(0);
  }

  function Operation(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num2);
    setNum(0);
  }

  function Calculate() {
    if (operator === "/") {
      setNum(parseFloat(num1) / parseFloat(num2));
    } else if (operator === "*") {
      setNum(parseFloat(num1) * parseFloat(num2));
    } else if (operator === "-") {
      setNum(parseFloat(num1) - parseFloat(num2));
    } else if (operator === "+") {
      setNum(parseFloat(num1) + parseFloat(num2));
    }
  }

  return (
    <div className="App">
      <h1 className="result">{num2}</h1>
      <div className="container">
      <div className="operator-container">
            <button
              className="mathSigns grid-item"
              onClick={Operation}
              value={"+"}
            >
              +
            </button>
            <button
              className="mathSigns grid-item"
              onClick={Operation}
              value={"-"}
            >
              -
            </button>
            <button
              className="mathSigns grid-item"
              onClick={Operation}
              value={"*"}
            >
              x
            </button>
            <button
              className="mathSigns grid-item"
              onClick={Operation}
              value={"/"}
            >
              ÷
            </button>
            <button
              className="numbers grid-item"
              onClick={InputNumber}
              value={"."}
            >
              .
            </button>
          </div>
        <div className="num-container">
          <button className="numbers grid-item" onClick={InputNumber} value={9}>
            9
          </button>
          <button className="numbers grid-item" onClick={InputNumber} value={8}>
            8
          </button>
          <button className="numbers grid-item" onClick={InputNumber} value={7}>
            7
          </button>
          <button className="numbers grid-item" onClick={InputNumber} value={6}>
            6
          </button>
          <button className="numbers grid-item" onClick={InputNumber} value={5}>
            5
          </button>
          <button className="numbers grid-item" onClick={InputNumber} value={4}>
            4
          </button>
          <button className="numbers grid-item" onClick={InputNumber} value={3}>
            3
          </button>
          <button className="numbers grid-item" onClick={InputNumber} value={2}>
            2
          </button>
          <button className="numbers grid-item" onClick={InputNumber} value={1}>
            1
          </button>
          <button className="numbers grid-item" onClick={InputNumber} value={0}>
            0
          </button>

          

          <div className="clear-btn">
            <button className="numbers grid-item" onClick={Clear}>
              C
            </button>
            <div className="result-btn">
            <button
              className="equalSign grid-item"
              onClick={Calculate}
              value={"="}
            >
              =
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
