import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./button.js";
import {TaskCard} from "./Task.js"


const root = ReactDOM.createRoot(document.getElementById("root"));



// Hola mundo
root.render(
  <>
  <TaskCard ready ={true}/>
  </>
);
