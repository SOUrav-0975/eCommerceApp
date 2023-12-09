import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <button buttonType="inverted" className="add-to-cart">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
