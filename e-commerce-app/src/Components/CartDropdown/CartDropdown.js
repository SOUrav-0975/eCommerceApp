import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItems from "../CartItems/CartItems";
import "./CartDropdown.scss";

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const cartCheckoutHandler = () => {
    navigate("/cart-checkout");
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItems key={item.id} CartItems={item} />
        ))}
      </div>
      <button onClick={cartCheckoutHandler}> Go to Checkout</button>
    </div>
  );
};

export default CartDropdown;
