import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";

//Components
import Store from "./components/Store";
import ProductsDetails from "./components/ProductsDatails";

//Context
import ProductContextProvider from "./context/ProductContextProvider";
function App() {
  return (
    <>
      <ProductContextProvider>
        <Switch>
          <Route path="/products/:id" component={ProductsDetails} />
          <Route path="/products" component={Store} />
          <Redirect to="/products" />
        </Switch>
      </ProductContextProvider>
    </>
  );
}

export default App;
