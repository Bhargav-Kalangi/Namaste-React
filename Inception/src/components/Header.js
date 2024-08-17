import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const[btnName,setBtnName]=useState('Login')
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>Add to cart</li>
            <button className="login-btn" onClick={()=>{
              btnName==='Login'?setBtnName('Logout'):setBtnName('Login')
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header