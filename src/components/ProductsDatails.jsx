import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

//Style's
import styles from "./ProductDetails.module.css";

//Context
import { ProductsContext } from "../context/ProductContextProvider";

const ProductsDetails = (props) => {
  const params = useParams();
  const id = params.id;
  const data = useContext(ProductsContext);
  const product = data[id - 1];

  return (
    <div className={styles.container}>
      <img className={styles.image} src={product?.image} alt="product" />
      <div className={styles.textContainer}>
        <h3>{product?.title}</h3>
        <p className={styles.decription}>{product?.description} </p>
        <p className={styles.category}>
          <span>Category: </span>
          {product?.category}{" "}
        </p>
        <div className={styles.buttonContainer}>
          <span>Price: {product?.price}$</span>
          <Link to="/products">Back to Products</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
