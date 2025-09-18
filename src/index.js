import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [counter, setCounter] = useState(10);
  return (
    <div>
      <h1>Counter:{counter} </h1>
      <button
        onClick={() => {
          setCounter(counter + 10);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter(counter - 10);
        }}
      >
        Descrement
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reiniciar
      </button>
    </div>
  );
}
// Hola mundo
root.render(
  <>
    <Counter />
  </>
);
