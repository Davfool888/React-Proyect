import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [mensaje, setMensaje] = useState('');
  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)}></input>
      <button onClick={() =>{
        alert("El mensaje es: "+ mensaje)
      }}>save</button>
    </div>
  );
}
// Hola mundo
root.render(
  <>
    <Counter />
  </>
);
