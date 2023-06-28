import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); // 새로고침 방지
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };

  console.log(todos);
  return (
    <div>
      <h1>todo list ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="what should i do?"
          value={todo}
          onChange={onChange}
        />
        <button>click</button>
      </form>
      <ol>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
