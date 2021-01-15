import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Data from "./Data";

test("The cards are rendering", () => {
  render(<Data />);
});
