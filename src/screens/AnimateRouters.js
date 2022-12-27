import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Detail from "./Detail";
import Cart from "./Cart";
import Login from "./Login";
import Register from "./Register";
export default function AnimateRouters() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/wishlist" element={<WishList />} /> */}
    </Routes>
  );
}
