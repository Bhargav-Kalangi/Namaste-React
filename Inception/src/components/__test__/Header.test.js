import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
test("should check whether Login is present or not & after clicking on login , it should change to logout", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const login = screen.getByRole("button", { name: "Login" });
  expect(login).toBeInTheDocument();
  fireEvent.click(login);
  const logout = screen.getByRole("button", { name: /Logout/i });
  expect(logout).toBeInTheDocument();
});

test("should check Groceries is present or not", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const groceries = screen.getByText(/Groceries/i);
  expect(groceries).toBeInTheDocument();
});
