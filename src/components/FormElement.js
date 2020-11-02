import React from "react";
import "./FormElement.css";

export default function FormElement({
  handleSubmit,
  inputValue,
  setInputValue,
}) {
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        placeholder="Add Item"
        id="input"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
