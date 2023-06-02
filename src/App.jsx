import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";

//Components
import Store from "./components/Store";
import ProductsDetails from "./components/ProductsDatails";

//Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Switch>
            <Route path="/products/:id" component={ProductsDetails} />
            <Route path="/products" component={Store} />
            <Redirect to="/products" />
          </Switch>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
