import { useReducer } from "react";
import { reducer } from "./utils/reducer";
import { initialState } from "./utils/reducer";
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleClickIncrement = () => {
    dispatch({
      type: "counter/increment",
      payload: 5,
    });
  };
  const handleClickDecrement = () => {
    dispatch({
      type: "counter/decrement",
      payload: 5,
    });
  };
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleClickIncrement}>Increment</button>
      <button onClick={handleClickDecrement}>Decrement</button>
    </div>
  );
}
