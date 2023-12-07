import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logoContainer" to="/">
          <h1>upTrend</h1>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            Signin
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
