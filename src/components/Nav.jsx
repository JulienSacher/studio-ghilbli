import React from "react";
import "../styles/Nav.css";
import logo from "../img/logo.jpg";

function Nav() {
  return (
    <div>
      <div className="navbar ps-5">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" width="120" height="120" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
