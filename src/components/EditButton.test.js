import React from "react";
// import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import EditButton from "./EditButton";

it("renders an edit button", () => {
  const div = document.createElement("div");
  render(<EditButton />, div);
});
