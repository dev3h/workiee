import React from "react";
import Carousel from "nuka-carousel";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Home() {
  const navigate = useNavigate();
  const onMoveToProduct = () =>  {
    navigate("/products", { replace: true});
  };
  return (
    <div className="wrapper">
      {/* header */}
      <div>
        <Header />
      </div>
      <div className="home-main">
        {/* hero carousel */}
        <div className="carousel">
          <Carousel>
            <img
              src={require("../assets/images/hero/img1.webp")}
              alt="workiee-hero1"
            />
            <img
              src={require("../assets/images/hero/img2.webp")}
              alt="workiee-hero2"
            />
          </Carousel>
        </div>
        {/* category */}
        <div className="category p-5">
          <Grid container spacing={2} lg={12}>
            {/* col1 */}
            <Grid item lg="3">
              <div className="flex flex-col gap-4">
                <div className="flex relative">
                  <img
                    src={require("../assets/images/category/img1.webp")}
                    alt="workiee-category1"
                  />
                  <button
                    className="absolute top-2/4 left-2/4 w-28 h-12 bg-white/80 rounded-md font-medium hover:bg-violet-500/80 transition-all duration-500 hover:text-white"
                    style={{ transform: "translate(-50%, -50%)" }}
                  >
                    SALE
                  </button>
                </div>
                <div className="relative">
                  <img
                    src={require("../assets/images/category/img5.webp")}
                    alt="workiee-category5"
                  />
                  <button
                    className="absolute top-2/4 left-2/4 w-28 h-12 bg-white/80 rounded-md font-medium hover:bg-violet-500/80 transition-all duration-500 hover:text-white"
                    style={{ transform: "translate(-50%, -50%)" }}
                  >
                    NEW
                  </button>
                </div>
              </div>
            </Grid>
            {/* col2 */}
            <Grid item lg="3">
              <div className="relative">
                <img
                  src={require("../assets/images/category/img2.webp")}
                  alt="workiee-category2"
                  className="row-span-2"
                />
                <button
                  className="absolute top-2/4 left-2/4 w-28 h-12 bg-white/80 rounded-md font-medium hover:bg-[#2879fe]/80 transition-all duration-500 hover:text-white"
                  style={{ transform: "translate(-50%, -50%)" }}
                  onClick={onMoveToProduct}
                >
                  WOMEN
                </button>
              </div>
            </Grid>
            {/* col3 */}
            <Grid item lg="6">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="relative">
                    <img
                      src={require("../assets/images/category/img3.webp")}
                      alt="workiee-category3"
                    />
                    <button
                      className="absolute top-2/4 left-2/4 w-28 h-12 bg-white/80 rounded-md font-medium hover:bg-[#2879fe]/80 transition-all duration-500 hover:text-white"
                      style={{ transform: "translate(-50%, -50%)" }}
                    >
                      MEN
                    </button>
                  </div>
                  <div className="relative">
                    <img
                      src={require("../assets/images/category/img4.webp")}
                      alt="workiee-category4"
                    />
                    <button
                      className="absolute top-2/4 left-2/4 w-40 h-12 bg-white/80 rounded-md font-medium hover:bg-[#2879fe]/80 transition-all duration-500 hover:text-white"
                      style={{ transform: "translate(-50%, -50%)" }}
                    >
                      ACCESSORIES
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={require("../assets/images/category/img6.webp")}
                    alt="workiee-category6"
                  />
                  <button
                    className="absolute top-2/4 left-2/4 w-28 h-12 bg-white/80 rounded-md font-medium hover:bg-[#2879fe]/80 transition-all duration-500 hover:text-white"
                    style={{ transform: "translate(-50%, -50%)" }}
                  >
                    SHOES
                  </button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* footer */}
      </div>
      <Footer />
    </div>
  );
}
