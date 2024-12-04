import PropTypes from "prop-types";
export default function TodoList({ todoList }) {
  return (
    <div>
      <ul>
        {todoList.map(({ name, completed }, index) => (
          <li key={index} className={`${completed ? "completed" : ""}`}>
            <input type="checkbox" name="" id="" /> {name}
            <button>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
};
