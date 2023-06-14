import { useContext, useEffect } from "react";

//Context
import { CartContext } from "../../context/CartContextProvider";

//Functions
import { shorten } from "../../helpers/function.js";

//Icons
import trashIcon from "../../assets/icons/trash.svg";

const Cart = (props) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div>
      <img src={props?.data.image} alt="product" />
      <div>
        {/* <h3>{shorten(title)}</h3> */}
        <p>{props?.data.price} $</p>
      </div>
      <div>
        <span> {props?.data.quantity} </span>
      </div>
      <div>
        {props?.data.quantity > 1 ? (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: props?.data })}
          >
            -
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: props?.data })}
          >
            <img src={trashIcon} alt="Trash Icon" style={{ width: "20px" }} />
          </button>
        )}
        <button
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
