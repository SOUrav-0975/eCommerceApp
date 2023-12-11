import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/FirebaseAuth";
import SHOP_DATA from "../shop-data";

export const ProductsContext = createContext({
  products: {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments("categiries");
      console.log(categoriesMap);
      setProducts(categoriesMap);
    };
    getCategoriesMap();
  }, []);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
