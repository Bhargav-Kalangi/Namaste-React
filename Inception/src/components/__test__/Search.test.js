import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MockData from "../mocks/MockData.json";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockData);
    },
  });
});
test("Body component should have a search field, when we enter something on search it should filter the resCards", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBar = screen.getByTestId("search-bar");
  //   console.log(searchBar);
  expect(searchBar).toBeInTheDocument();
  const button = screen.getByRole("button", { name: /search/i });
  expect(button).toBeInTheDocument();
  const beforeFilter = screen.getAllByTestId("resCards");
  expect(beforeFilter.length).toBe(20);
  fireEvent.change(searchBar, { target: { value: "murali" } });
  fireEvent.click(button);
  const afterFilter = screen.getAllByTestId("resCards");
  expect(afterFilter.length).toBe(3);
});

test("should filter top rated restaurants by clicking on top rated Restaurants button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const TopRated = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  expect(TopRated).toBeInTheDocument();
  const beforeFilter = screen.getAllByTestId("resCards");
  expect(beforeFilter.length).toBe(20);
  fireEvent.click(TopRated);
  const afterFilter = screen.getAllByTestId("resCards");
  expect(afterFilter.length).toBe(15);
});
