// import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // console.log("Header rendered");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);
  return (
    <div className="header flex justify-between shadow  bg-slate-400 rounded-lg">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className=" flex text-center">
        <ul className=" flex m-5 p-5">
          <li className="px-4">online status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>

          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/groceries">Groceries</Link>
          </li>
          <li className="px-4">Add to cart</li>
          <Link to="/login">
            <button
              className="px-4"

              // onClick={() => {
              //   btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              // }}
            >
              Login
            </button>
          </Link>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
