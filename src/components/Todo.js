import React from "react";
import "./Todo.css";

const Todo = ({ text }) => {
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="btn btn-done">Done</button>
      <button className="btn btn-delete">Delete</button>
    </div>
  );
};

export default Todo;
