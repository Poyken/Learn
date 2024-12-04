import { useState } from "react";
import { useSelector, useDispatch } from "../../store/hook";
import "./todo.scss";
import {
  addTodo,
  deleteTodo,
  completedTodo,
} from "../../store/actions/todoActions";
export default function Todo2() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);
  const todoListCompleted = useSelector((state) =>
    state.todoList.filter((todo) => todo.completed)
  );
  const [name, setName] = useState("");
  const handleChangeValue = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { name, completed: false };
    dispatch(addTodo(todo));
    setName("");
  };
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete")) {
      dispatch(deleteTodo(index));
    }
  };
  const handleComplete = (index) => {
    dispatch(completedTodo(index));
  };
  return (
    <div>
      <ul>
        {todoList.map(({ name, completed }, index) => (
          <li key={index} className={`${completed ? "completed" : ""}`}>
            <input
              type="checkbox"
              name=""
              id=""
              onChange={() => {
                handleComplete(index);
              }}
            />
            <span> {name}</span>
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
      <h2>Complete count: {todoListCompleted.length}</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          onChange={handleChangeValue}
          value={name}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
