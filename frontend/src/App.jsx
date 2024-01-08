import { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/todos");
        const json = await res.json();
        setTodos(json.todos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
