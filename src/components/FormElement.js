import React from "react";
import "./FormElement.css";

export default function FormElement() {
  let inputValue = null;
  return (
    <form
      onSubmit={(event) => {
        inputValue = document.getElementById("input").value;
        event.preventDefault();
        alert(inputValue);
      }}
    >
      <input type="text" placeholder="Add Item" id="input" />
      <button>Add</button>
    </form>
  );
}
