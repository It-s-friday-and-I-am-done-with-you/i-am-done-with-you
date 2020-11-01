import ListElement from "./ListElement";
// Is { currentToDos = [] } a dirty fix for error cannot map undefined???

export default function List({ currentToDos, setCurrentToDos }) {
  return (
    <ul data-testid="list">
      {currentToDos.map((todo) => (
        <ListElement
          key={todo}
          todo={todo}
          currentToDos={currentToDos}
          setCurrentToDos={setCurrentToDos}
        />
      ))}
    </ul>
  );
}
