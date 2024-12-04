import { useState } from "react";
import PropTypes from "prop-types";

export default function TodoAdd({ onSubmit }) {
  const [name, setName] = useState("");
  const handleChangeValue = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
    setName("");
  };
  return (
    <div>
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

TodoAdd.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
