import { useReducer } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { initialState, reducer } from "../../utils/reducer";
export default function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todoList } = state;
  const handleAddTodo = (todoName) => {
    const todo = { name: todoName, completed: false };
    dispatch({ type: "todo/add", payload: todo });
  };
  return (
    <div>
      <TodoList todoList={todoList}></TodoList>
      <TodoAdd onSubmit={handleAddTodo}></TodoAdd>
    </div>
  );
}
