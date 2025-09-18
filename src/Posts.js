export const Posts = () => {
  return ( <button onClick={() => {
    fetch('https://jsonplaceholder.typicodexyz.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  }}>
    Traer datos
  </button>
  );
};
