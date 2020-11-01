import "./App.css";
import { useState } from "react";
import FormElement from "./components/FormElement";
import List from "./components/List";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [currentToDos, setCurrentToDos] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  function handleSubmit(event) {
    event.preventDefault();
    setCurrentToDos([...currentToDos, inputValue]);
    const newToDos = [...currentToDos, inputValue];
    localStorage.setItem("todo", JSON.stringify(newToDos));
    setInputValue("");
  }

  return (
    // Some awesomeness here
    <main>
      <p>Hallo</p>
      <FormElement
        inputValue={inputValue}
        handleSubmit={handleSubmit}
        setInputValue={setInputValue}
      />
      <List currentToDos={currentToDos} setCurrentToDos={setCurrentToDos} />
    </main>
  );
}

export default App;
