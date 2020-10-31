import DeleteButton from "./DeleteButton";

export default function ListElement({ todo }) {
  return (
    <div>
      <li data-testid="listElement">{todo}</li>
      <DeleteButton />
    </div>
  );
}
