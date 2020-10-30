import React from "react";
import { render, screen } from "@testing-library/react";
import ListElement from "./ListElement";

test("renders list with to-do-items", () => {
  render(<ListElement />);
  const listElement = screen.getByTestId("listElement");
  expect(listElement).toBeInTheDocument();
});
