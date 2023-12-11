import React from "react";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { ProductsContext } from "../../context/ProductContext";
import "./ProductCategories.scss";

const ProductCategories = () => {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);
  console.log(products);
  const [product, setProduct] = useState(products[category]);

  useEffect(() => {
    setProduct(products[category]);
  }, [category, products]);

  return (
    <>
      <h2 className="category-title">{category}</h2>
      <div className="category-container">
        {product &&
          product.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default ProductCategories;
