import React from "react";
import "./TodoList.css";
import Todo from "./Todo";

const TodoList = ({ todos = [] }) => {
  return (
    <div className="todo-wrapper">
      <ul data-testid="todo-list" className="list">
        {todos.map((todo) => (
          <Todo key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
