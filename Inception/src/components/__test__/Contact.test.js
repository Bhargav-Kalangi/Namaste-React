import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";
test("Testing contact us page", () => {
  render(<Contact />);
  //querying
  const data = screen.getByRole("heading");
  const button = screen.getByRole("button");
  const inputs = screen.getAllByRole("textbox");

  //Assertions
  expect(data).toBeInTheDocument();

  expect(button).toBeInTheDocument();
  expect(inputs.length).toBe(2);
});
