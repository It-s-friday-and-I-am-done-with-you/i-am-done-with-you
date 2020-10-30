import ListElement from "./ListElement";

export default function List({ currentToDos }) {
  //   const items = ["blaa", "blupp", "blii"];
  //   const listItems = items.map((item) => <li key={item.toString()}>{item}</li>);

  return (
    <ul data-testid="list">
      {currentToDos.map((todo) => (
        <ListElement key={todo} todo={todo} />
      ))}
    </ul>
  );
}
