import { Link } from "react-router-dom";
import { useContext } from "react";

//Functions
import { shorten, isInCart, quantityCount } from "../../helpers/function.js";

//Context
import { CartContext } from "../../context/CartContextProvider";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <>
      <div>
        <img src={productData.image} alt="product" style={{ width: "300px" }} />
        <h3>{shorten(productData.title)}</h3>
        <p>{productData.price} $</p>
        <div>
          <Link to={`/products/${productData.id}`}>Details</Link>
          <div>
            {isInCart(state, productData.id) ? (
              <button
                onClick={() =>
                  dispatch({ type: "INCREASE", payload: productData })
                }
              >
                +
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch({ type: "ADD_ITEM", payload: productData })
                }
              >
                Add to Cart
              </button>
            )}

            {quantityCount(state, productData.id) > 1 && (
              <button
                onClick={() =>
                  dispatch({ type: "DECREASE", payload: productData })
                }
              >
                -
              </button>
            )}
            {quantityCount(state, productData.id) === 1 && (
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: productData })
                }
              >
                Remove Item
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
