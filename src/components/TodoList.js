import React from "react";
import "./TodoList.css";

const TodoList = (inputText) => {
  return (
    <div className="todo-wrapper">
      <ul data-testid="todo-list" className="list">
        <li>A todo</li>
      </ul>
    </div>
  );
};

export default TodoList;
