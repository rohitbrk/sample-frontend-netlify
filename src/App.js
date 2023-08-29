import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  CONST BACKEND_URL = process.env.BACKEND_URL;
  useEffect(() => {
    const app = async () => {
      const response = await fetch(
        BACKEND_URL
      );
      const data = await response.json();
      console.log(data);
      setTodos((prevValue) => data);
    };
    app();
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h3>{todo.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
