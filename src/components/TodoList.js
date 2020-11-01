import React from "react";
import "./TodoList.css";

const TodoList = () => {
  return (
    <div className="todo-wrapper">
      <ul data-testid="todo-list" className="list"></ul>
    </div>
  );
};

export default TodoList;
