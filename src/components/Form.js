import React from "react";

const Form = () => {
  return (
    <form>
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
