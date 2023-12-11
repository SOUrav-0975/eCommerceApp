import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductContext";
import ProductPreview from "../../ProductPreview/ProductPreview";
const CategoryPreview = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);
  return (
    <div>
      {Object.keys(products).map((key) => {
        const product = products[key];

        return <ProductPreview key={key} title={key} products={product} />;
      })}
    </div>
  );
};

export default CategoryPreview;
