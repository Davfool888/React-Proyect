import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./button";
const root = ReactDOM.createRoot(document.getElementById("root"));



// Hola mundo
root.render(
  <>

  <Button text="Click me"/>
  <Button text="Pagar"/>
  <Button text="Go to"/>

  {/* Holaa */}
    {/* <UserCard
      name="Ryan Ray"
      amount={1000}
      married={false}
      points={[99, 22.2, 77]}
      address={{
        street: "123 Main Street",
        city: "Bogotá",
      }}
      greet={function(){alert("Holaaaaaaa")}}
    /> */}
    
  </>
);
