import React, { useState } from "react";
import "./FormElement.css";

export default function FormElement() {
  const [inputValue, setInputValue] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const currentToDos = JSON.parse(localStorage.getItem("todo")) || [];
    localStorage.setItem("todo", JSON.stringify([...currentToDos, inputValue]));
    setInputValue("");
  }
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
