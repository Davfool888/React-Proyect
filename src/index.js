import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <UserCard
      name="Ryan Ray"
      amount={1000}
      married={true}
      points={[99, 22.2, 77]}
      address={{
        street: "123 Main Street",
        city: "Bogotá",
      }}
    />
  </>
);
