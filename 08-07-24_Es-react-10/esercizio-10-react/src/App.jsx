import { useState } from "react";
import styles from "./App.module.css";

const initialTodos = [
  {
  id: 1,
  title: "Fare la spesa",
  },
  {
    id: 2,
    title: "Rinnovare assicurazione",
    },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState("");

  const addTodo= () => {
    if (!input.length) return;
    setTodos([...todos, {id: todos.lenght + 1, title: input}])
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input value={input} placeholder="ToDo" onChange={handleChange}/>
      <button onClick={addTodo}>Add</button>

      <div className={styles.container__list}> </div>
        <h2>List to Do</h2>
        <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <p>{todo.title}</p>
            </li>
          );
        })}
        </ul>
    </div>
  );
}

export default App;