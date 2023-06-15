import { useContext } from "react";
import { Link } from "react-router-dom";

//Style's
import styles from './Navbar.module.css'

//Context
import { CartContext } from "../../context/CartContextProvider";

//Icons
import shopIcon from "../../assets/icons/shop.svg";

const NavBar = () => {
  const { state } = useContext(CartContext);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link to="/products" className={styles.productLink} >Products</Link>
        <div className={styles.iconContainer}>
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
