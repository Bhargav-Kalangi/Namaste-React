// import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // console.log("Header rendered");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>online status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/groceries">Groceries</Link>
          </li>
          <li>Add to cart</li>
          <Link to="/login">
            <button
              className="login-btn"
              // onClick={() => {
              //   btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              // }}
            >
              Login
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
