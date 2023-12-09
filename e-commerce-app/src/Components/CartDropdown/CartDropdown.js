import React from "react";
import "./CartDropdown.scss";
const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <button> Go to Checkout</button>
    </div>
  );
};

export default CartDropdown;
