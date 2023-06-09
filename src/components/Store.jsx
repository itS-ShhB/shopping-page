import React, { useContext } from "react";

//Style's
import styles from "./Store.module.css";

//Components
import Product from "./shared/Product";

//Context
import { ProductsContext } from "../context/ProductContextProvider";

const Store = () => {
  const products = useContext(ProductsContext);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
