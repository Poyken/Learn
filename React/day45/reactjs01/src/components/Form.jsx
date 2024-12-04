import React, { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({});
  const [error, errorMessage] = useState({});
  const [data, setUser] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorObj = {};
    const { name, email } = form;
    if (!name) {
      errorObj.name = "Name is required";
    }
    if (!email) {
      errorObj.email = "Email is required";
    }
    errorMessage(errorObj);
    if (Object.keys(errorObj).length === 0) {
      setUser([form, ...data]);
      setForm({});
      errorMessage({});
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="name..."
            onChange={handleChange}
            value={form.name ?? ""}
          />
          {error.name}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="email..."
            onChange={handleChange}
            value={form.email ?? ""}
          />
          {error.email}
        </div>
        <button>Submit</button>
      </form>
      {data.map((item, index) => (
        <div key={index}>
          <h2>User {index + 1}</h2>
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
          <button
            onClick={() => {
              window.confirm(
                `Are you sure you want to delete this user ${index + 1}?`
              );
              setUser(data.filter((_, i) => i !== index));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
