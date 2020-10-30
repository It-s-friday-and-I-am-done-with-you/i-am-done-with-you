import { render, screen } from "@testing-library/react";
import FormElement from "./FormElement";

test("renders learn react link", () => {
  render(<FormElement />);
  const linkElement = screen.getByPlaceholderText(/Add Item/i);
  expect(linkElement).toBeInTheDocument();
});
