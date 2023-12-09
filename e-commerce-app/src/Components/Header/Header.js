import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/FirebaseAuth";
import { CartContext } from "../../context/CartContext";
//import Shop from "../Routes/Shop/Shop";
import CartIcons from "../Cart/CartIcons";
import CartDropdown from "../CartDropdown/CartDropdown";
import "./Header.scss";
const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <>
      <div className="navigation">
        <Link
          className="logoContainer"
          to="/"
          style={{
            fontSize: "40px",
            color: "teal",
            fontWeight: "700",
            fontFamily: "serif",
          }}
        >
          upTrend
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link className="nav-link" to="/sign-in" onClick={signOutHandler}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          )}
          <span className="nav-link" onClick={toggleCart}>
            <CartIcons />
          </span>
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Header;
