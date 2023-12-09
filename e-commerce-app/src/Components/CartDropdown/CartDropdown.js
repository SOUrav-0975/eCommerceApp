import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItems from "../CartItems/CartItems";
import "./CartDropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItems key={item.id} CartItems={item} />
        ))}
      </div>
      <button> Go to Checkout</button>
    </div>
  );
};

export default CartDropdown;
