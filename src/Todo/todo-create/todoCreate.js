import "./todoCreate.css";
import { useState } from "react";

const TodoCreate = (props) => {
  const [getInputTodo, setInputTodo] = useState("");

  const handleInputTodo = (event) => {
    setInputTodo(event.target.value);
    console.log(getInputTodo);
  };

  const handleSumbit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,

      title: getInputTodo,
    };
    props.onCreateTodo(newTodo);
    console.log(newTodo);
    setInputTodo("");
  };

  return (
    <form className="todo-form" onSubmit={handleSumbit}>
      <input type="text" value={getInputTodo} onChange={handleInputTodo} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoCreate;
