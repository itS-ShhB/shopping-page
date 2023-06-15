import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

//Components
import Store from "./components/Store";
import ProductsDetails from "./components/ProductsDatails";
import NavBar from "./components/shared/NavBar";
import ShopCart from "./components/ShopCart";

//Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/products/:id" element={<ProductsDetails />} />
            <Route path="/products" element={<Store />} />
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
