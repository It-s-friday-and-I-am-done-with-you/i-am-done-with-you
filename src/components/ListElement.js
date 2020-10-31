import EditButton from "./EditButton";

export default function ListElement({ todo }) {
  return (
    <li data-testid="listElement">
      {todo}
      <EditButton />
    </li>
  );
}
