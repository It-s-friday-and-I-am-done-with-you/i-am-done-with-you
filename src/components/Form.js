import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <form className="input-form">
      <input type="text" className="input-text" />
      <button className="button-add" type="submit">
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
