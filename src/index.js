import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./button.js";
import {TaskCard} from "./Task.js"
import {Saludar} from './Saludar.js'

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange= (e) =>{console.log(e.target.value)}

// Hola mundo
root.render(
  <>
  <TaskCard ready ={true}/>
  <Saludar/>
  <Button name="Click"/>
  <input id="Hola" onChange={handleChange}/>
  </>
);
