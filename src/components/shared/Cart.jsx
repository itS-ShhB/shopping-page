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
      <img src={props.data.item.image} alt="product" />
      <div>
        <h3>{shorten(props.data.item.title)}</h3>
        <p>{props.data.item.price} $</p>
      </div>
      <div>
        <span> {props.data.item.quantity} </span>
      </div>
      <div>
        {props.data.item.quantity > 1 ? (
          <button
            onClick={() =>
              dispatch({ type: "DECREASE", payload: props.data.item })
            }
          >
            -
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "DECREASE", payload: props.data.item })
            }
          >
            <img src={trashIcon} alt="Trash Icon" style={{ width: "20px" }} />
          </button>
        )}
        <button
          onClick={() =>
            dispatch({ type: "INCREASE", payload: props.data.item })
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
