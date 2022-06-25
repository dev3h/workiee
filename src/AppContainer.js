import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import AnimateRouters from "./screens/AnimateRouters";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

// import WishList from "../src/screens/WishList";
export default function AppContainer() {
  const [loadingPage, setLoadingPage] = useState(false);
  useEffect(() => {
    setLoadingPage(true);
    setTimeout(() => {
      setLoadingPage(false);
    }, 5000);
  }, []);
  return (
    <div>
      {loadingPage ? (
        <div className="w-full min-h-screen flex justify-center items-center bg-slate-800">
          <ClimbingBoxLoader
            color={"#f37a24"}
            loading={loadingPage}
            size={30}
          />
        </div>
      ) : (
        <BrowserRouter>
          <ToastContainer />
          {/* declare routers */}
          <AnimateRouters />
        </BrowserRouter>
      )}
    </div>
  );
}
