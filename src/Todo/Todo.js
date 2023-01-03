import "./Todo.css";
import TodoList from "./todo-list/TodoList";
import todoCreate from "./todo-create/todoCreate";

const Todo = () => {
  const todos = [
    { id: 1, title: "Eat" },
    { id: 2, title: "sleb" },
    { id: 3, title: "uweee" },
  ];

  return (
    <div>
      <h3>todo list</h3>
      <todoCreate />
      <TodoList dataTodos={todos} />
    </div>
  );
};

export default Todo;
