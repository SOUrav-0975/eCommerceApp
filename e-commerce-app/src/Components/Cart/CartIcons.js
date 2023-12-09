import React from "react";
import { useContext } from "react";
import { ReactComponent as CartIcon } from "../../Assets/shopping-bag.svg";
import { CartContext } from "../../context/CartContext";
import "./CartIcons.scss";
const CartIcons = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <div className="cart-icon-container">
      <CartIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcons;
