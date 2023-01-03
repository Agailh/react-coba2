import "./Todo.css";
import TodoList from "./todo-list/TodoList";
import TodoCreate from "./todo-create/todoCreate";
import { useState } from "react";

const Todo = () => {
  const [getTodos, setTodos] = useState([
    { id: 1, title: "Eat" },
    { id: 2, title: "sleb" },
    { id: 3, title: "uweee" },
  ]);

  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo));
    console.log(getTodos);
  };

  return (
    <div>
      <h3>todo list</h3>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <TodoList dataTodos={getTodos} />
    </div>
  );
};

export default Todo;
