import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [mensaje, setMensaje] = useState("");
  const [Counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Render");
  }, [Counter]);

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)}></input>
      <button
        onClick={() => {
          alert("El mensaje es: " + mensaje);
        }}
      >
        save
      </button>
      <hr />
      <h1>Counter: {Counter} </h1>
      <button onClick={() => setCounter(Counter + 1)}>Incrementar</button>
    </div>
  );
}
// Hola mundo
root.render(
  <>
    <Counter />
  </>
);
