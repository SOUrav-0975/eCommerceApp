import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          MyStore
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
