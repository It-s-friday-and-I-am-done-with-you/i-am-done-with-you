import ListElement from "./ListElement";

export default function List() {
  //   const items = ["blaa", "blupp", "blii"];
  //   const listItems = items.map((item) => <li key={item.toString()}>{item}</li>);

  return (
    <ul data-testid="list">
      <ListElement />
    </ul>
  );
}
