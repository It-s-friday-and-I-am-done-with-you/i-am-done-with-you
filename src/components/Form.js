import React from "react";
import "./Form.css";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  };

  const submitInputHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form className="input-form" autoComplete="off">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="input-text"
      />
      <button onClick={submitInputHandler} className="button-add" type="submit">
        Add
      </button>
      <div className="selection">
        <select name="todos" className="filter">
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="todo">ToDo</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
