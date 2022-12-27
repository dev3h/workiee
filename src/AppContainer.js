import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import AnimateRouters from "./screens/AnimateRouters";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

// import WishList from "../src/screens/WishList";
export default function AppContainer() {
  return (
    <BrowserRouter>
      <ToastContainer />
      {/* declare routers */}
      <AnimateRouters />
    </BrowserRouter>
  );
}
