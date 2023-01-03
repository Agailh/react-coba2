import "./Todo.css";
import TodoList from "./todo-list/TodoList";

const Todo = () => {
  const todos = () => [
    { id: 1, title: "Eat" },
    { id: 2, title: "code" },
    { id: 3, title: "uweee" },
  ];

  return (
    <div>
      <h3>todo list</h3>
      <TodoList dataTodos={todos} />
    </div>
  );
};

export default Todo;
