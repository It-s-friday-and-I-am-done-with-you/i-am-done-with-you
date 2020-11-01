import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders learn react link", () => {
  render(<TodoList />);
  expect(screen.getByTestId("todo-list")).toBeInTheDocument();
});
