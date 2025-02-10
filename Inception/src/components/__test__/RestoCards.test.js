import RestoCards from "../Restocards";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestoMocks from "../mocks/RestoMocks.json";
test("should render all the restaurant cards", () => {
  render(<RestoCards resData={RestoMocks} />);

  const name = screen.getByText("Sri Venkataramana hotel");
  expect(name).toBeInTheDocument();
});
