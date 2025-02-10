import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import ShoppingCart from "./components/ShoppingCart";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorHandling from "./components/ErrorHandling";
import Contact from "./components/Contact";
// import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginForm from "./components/LoginForm";
// import Grocery from "./components/Grocery";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
const AppLayout = () => {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    const data = {
      name: "Bhargav Kalangi",
    };
    setUserName(data.name);
  }, []);
  return (
    <div className="app">
      <Provider store={store}>
        <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
        </userContext.Provider>
      </Provider>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        // errorElement: <ErrorHandling />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/groceries",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorHandling />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
