import React from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "Ryan ray ",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Cain Reales ",
    image: "https://robohash.org/user3",
  },
  {
    id: 3,
    name: "Aleja Vivas ",
    image: "https://robohash.org/user4",
  },
];

// Hola mundo
root.render(
  <>
    {users.map((user, index) => {
      return <div key= {index}>
        <h1 >{user.name}  {index}</h1>
        <img src={user.image}></img>
      </div>;
    })}
  </>
);
