import React from "react";
import { render, screen } from "@testing-library/react";
import List from "./List";

test("renders list with to-do-items", () => {
  render(<List />);
  const list = screen.getByTestId("list");
  expect(list).toBeInTheDocument();
});
