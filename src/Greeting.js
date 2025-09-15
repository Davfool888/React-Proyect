export function Greeting({title, name = "User"}) {
  return <h1>{title}, dice {name}</h1>;
}

export function UserCard(props) {
  console.log(props)
  return <h1>User Card</h1>;
}
