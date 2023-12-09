import React from "react";
import "./CartItems.scss";
const CartItems = ({ CartItems }) => {
  const { name, imageUrl, price, quantity } = CartItems;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>

        <span className="price">
          {quantity} * ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItems;
