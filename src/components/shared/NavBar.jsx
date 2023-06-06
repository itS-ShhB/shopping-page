import { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { CartContext } from "../../context/CartContextProvider";

//Icons
import shopIcon from "../../assets/icons/shop.svg";

const NavBar = () => {
  const { state } = useContext(CartContext);

  return (
    <div>
      <div>
        <Link to="/products">Products</Link>
        <div>
          <Link to="/cart">
            <img src={shopIcon} alt="Shop" />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
