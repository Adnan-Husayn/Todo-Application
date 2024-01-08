import TodoButton from './TodoButton';
export function Todos({ todos, onUpdateTodo }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <TodoButton todo={todo} onUpdateTodo={onUpdateTodo} />
          </div>
        );
      })}
    </div>
  );
}
