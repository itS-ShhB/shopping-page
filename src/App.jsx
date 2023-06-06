import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";

//Components
import Store from "./components/Store";
import ProductsDetails from "./components/ProductsDatails";
import NavBar from "./components/shared/NavBar";
import ShopCart from './components/ShopCart';

//Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <NavBar />
          <Switch>
            <Route path="/products/:id" component={ProductsDetails} />
            <Route path="/products" component={Store} />
            <Route path="/cart" component={ShopCart} />
            <Redirect to="/products" />
          </Switch>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
