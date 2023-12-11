// import React from "react";
// import { useContext } from "react";
// //import ProductCard from "../../ProductCard/ProductCard";
// import ProductCategories from "../../ProductCategories/ProductCategories";
// import { ProductsContext } from "../../../context/ProductContext";
// import "./Shop.scss";
// const Shop = () => {
//   const { products } = useContext(ProductsContext);

//   return (
//     <div className="shop-container">
//       {Object.keys(products).map((key) => {
//         const products = products[key];
//         return <ProductCategories key={key} title={key} products={products} />;
//       })}
//     </div>
//   );
// };

// export default Shop;

import { Routes, Route } from "react-router-dom";
import CategoryPreview from "../CategoryPreview/CategoryPreview";
import ProductCategories from "../../ProductCategories/ProductCategories";

//import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<ProductCategories />} />
    </Routes>
  );
};

export default Shop;
