import ListElement from "./ListElement";

export default function List({ currentToDos = [] }) {
  return (
    <ul data-testid="list">
      {currentToDos.map((todo) => (
        <ListElement key={todo} todo={todo} />
      ))}
    </ul>
  );
}
