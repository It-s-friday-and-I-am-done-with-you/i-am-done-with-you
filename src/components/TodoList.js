import React from "react";
import "./TodoList.css";
import Todo from "./Todo";

const TodoList = ({ todos = [], setTodos, filteredTodos = [] }) => {
  return (
    <div className="todo-wrapper">
      <ul data-testid="todo-list" className="list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
