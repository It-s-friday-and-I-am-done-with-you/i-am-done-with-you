export default function ListElement({ todo, currentToDos, setCurrentToDos }) {
  function handleDelete() {
    const filteredArray = currentToDos.filter((item) => item !== todo);
    localStorage.setItem("todo", JSON.stringify(filteredArray));
    setCurrentToDos(filteredArray);
  }

  return (
    <div id="123">
      <li data-testid="listElement">{todo}</li>
      <button onClick={() => handleDelete()}>delete</button>
    </div>
  );
}
