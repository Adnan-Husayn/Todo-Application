import { useState } from "react";

const TodoButton = ({ todo, onUpdateTodo }) => {
  const [completed, setCompleted] = useState(todo.completed);

  const handleButtonClick = () => {
    setCompleted(!completed);
    onUpdateTodo(todo.id, !completed);
  };

  return (
    <button onClick={handleButtonClick}>
      {completed ? 'Completed' : 'Mark as Complete'}
    </button>
  );
};

export default TodoButton;


