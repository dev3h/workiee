import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/screens/Home";
import Products from "../src/screens/Products";
import Detail from "../src/screens/Detail";
import Cart from "../src/screens/Cart";
// import WishList from "../src/screens/WishList";
export default function AppContainer() {
  return (
    <BrowserRouter>
      {/* declare routers */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/wishlist" element={<WishList />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
