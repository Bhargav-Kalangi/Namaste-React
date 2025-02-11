import { render, screen, fireEvent } from "@testing-library/react";
import ResMenu from "../mocks/ResMenu.json";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import ItemList from "../ItemList";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(ResMenu),
  })
);
it("should Load Restaurant Menu Component", async () => {
  await act(async () => render(<RestaurantMenu />));

  const Header = screen.getByText("Recommended(20)");
  console.log(Header);
  expect(Header).toBeInTheDocument();
  //   fireEvent.click(Header);
});
