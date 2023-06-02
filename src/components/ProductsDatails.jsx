import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { ProductsContext } from "../context/ProductContextProvider";

const ProductsDetails = (props) => {
  const id = props.match.params.id;
  const data = useContext(ProductsContext);
  const product = data[id - 1];

  return (
    <div>
      <img src={product?.image} alt="product" />
      <div>
        <h3>{product?.title}</h3>
        <p>{product?.description} </p>
        <p>
          <span>Category: </span>
          {product?.category}{" "}
        </p>
        <div>
          <span>Price: {product?.price}$</span>
          <Link to="/products">Back to Products</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
