import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/screens/Home";
import Products from "../src/screens/Products";
import Detail from "../src/screens/Detail";
import Cart from "../src/screens/Cart";
import Login from "./screens/Login";
import Register from "./screens/Register";
// import WishList from "../src/screens/WishList";
import { ToastContainer } from "react-toastify";
export default function AppContainer() {
  return (
    <BrowserRouter>
      <ToastContainer />
      {/* declare routers */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* <Route path="/wishlist" element={<WishList />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
