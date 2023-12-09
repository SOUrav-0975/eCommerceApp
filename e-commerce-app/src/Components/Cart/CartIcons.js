import React from "react";
import { ReactComponent as CartIcon } from "../../Assets/shopping-bag.svg";
import "./CartIcons.scss";
const CartIcons = () => {
  return (
    <div className="cart-icon-container">
      <CartIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcons;
