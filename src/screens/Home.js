import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { BsHeadset } from "react-icons/bs";
import { TbArrowBackUp } from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { getCategories } from "../services/api";
export default function Home() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getAllCategories = async () => {
      const categories = await getCategories();
      setCategory(categories);
    };
    getAllCategories();
  }, []);
  function SampleNextArrow(props) {
    const { className, style } = props;
    return <div className={className} style={{ ...style, display: "none" }} />;
  }

  function SamplePrevArrow(props) {
    const { className, style } = props;
    return <div className={className} style={{ ...style, display: "none" }} />;
  }

  const settings = {
    dots: true,
    fade: true,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          position: "relative",
        }}
      >
        <ul
          style={{
            margin: "0px",
            position: "absolute",
            bottom: "30px",
            right: "0",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
  };

  const navigate = useNavigate();
  const onMoveToProduct = () => {
    navigate("/products", { replace: true });
  };

  return (
    <div className="wrapper">
      {/* header */}
      <div>
        <Header />
      </div>
      <div className="home-main mt-8">
        {/* hero carousel */}
        <div className="carousel px-[17px] ">
          <Grid container spacing={2} lg={12}>
            <Grid item lg="8">
              <Slider {...settings}>
                <div className="relative">
                  <img
                    className="rounded-md"
                    src={require("../assets/images/hero/img1.webp")}
                    alt=""
                  />
                  <div className="absolute top-[30%] left-[10%] z-20 text-white">
                    <div>WOKIEE</div>
                    <div className="text-4xl font-medium my-5">
                      1st Ecommerce Theme <br />
                      Recommended by EnvatoTuts+
                    </div>
                    <div
                      onClick={onMoveToProduct}
                      className="flex justify-center items-center w-fit h-[50px] rounded-md py-[6px] px-[27px] bg-[#2879fe] hover:bg-[#2267d8] cursor-pointer transition-all duration-300"
                    >
                      DISCOVER NOW
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="rounded-md"
                    src={require("../assets/images/hero/img2.webp")}
                    alt=""
                  />
                  <div className="absolute top-[30%] left-[10%] z-20 text-white">
                    <div className="text-pri">WOKIEE</div>
                    <div className="text-4xl font-medium my-5 text-black19">
                      Optimised <br />
                      for Dropshipping
                    </div>
                    <div
                      onClick={onMoveToProduct}
                      className="flex justify-center items-center w-fit h-[50px] rounded-md py-[6px] px-[27px] bg-[#2879fe] hover:bg-[#2267d8] cursor-pointer transition-all duration-300"
                    >
                      DISCOVER NOW
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="rounded-md"
                    src={require("../assets/images/hero/img3.webp")}
                    alt=""
                  />
                  <div className="absolute top-[30%] left-[10%] z-20 text-white">
                    <div className="text-pri">WOKIEE</div>
                    <div className="text-4xl font-medium my-5 text-black19">
                      Premium Customer <br />
                      Support Service
                    </div>
                    <div
                      onClick={onMoveToProduct}
                      className="flex justify-center items-center w-fit h-[50px] rounded-md py-[6px] px-[27px] bg-[#2879fe] hover:bg-[#2267d8] cursor-pointer transition-all duration-300"
                    >
                      DISCOVER NOW
                    </div>
                  </div>
                </div>
              </Slider>
            </Grid>
            <Grid item lg="4">
              <div className="group h-[482.56px] relative cursor-pointer">
                <img
                  className="relative rounded-md h-full group"
                  src={require("../assets/images/hero/img4.webp")}
                  alt=""
                />
                <div
                  onClick={onMoveToProduct}
                  className="absolute bottom-8 left-2/4 -translate-x-2/4 flex flex-col gap-2 justify-center items-center w-[223.16px] h-[114px] bg-white/90 rounded-md text-center font-medium transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:bg-pri/80 group-hover:text-white"
                >
                  <div>TOP VIEW IN THIS WEEK</div>
                  <div className="text-[26px]">TRENDING</div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* banner */}
        <div className="py-10">
          <img src={require("../assets/images/banner/img1.gif")} alt="" />
        </div>
        {/* category */}
        <div className="category p-5">
        <h3>Top Categories</h3>
          <Grid container spacing={2} lg={12}>
            {category.map((item, key) => (
              <Grid item lg="2" key={key}>
                <div className="relative h-28 group overflow-hidden cursor-pointer">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full object-top transition-all duration-500 ease-in-out group-hover:scale-110"
                  />
                  <button
                    className="absolute top-2/4 left-2/4 w-28 h-12 bg-white/80 rounded-md font-medium group-hover:bg-violet-500/80 transition-all duration-500 ease-in-out group-hover:text-white"
                    style={{ transform: "translate(-50%, -50%)" }}
                  >
                    {item.name}
                  </button>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        {/* best seller */}
        <div>
          
        </div>
        {/* services */}
        <div className="mt-[52px]">
          <Container maxWidth="lg">
            <Grid
              container
              spacing={2}
              columns={12}
              className="justify-between"
            >
              <Grid item lg={3}>
                <div className="flex gap-[21px] w-[400px]">
                  <BsHeadset className="text-[50px] text-pri" />
                  <div>
                    <h4 className="font-medium">SUPPORT 24/7</h4>
                    <p className="text-sm mt-[7px]">
                      Contact us 24 hours a day, 7 days a week
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item lg={3}>
                <div className="flex gap-[21px]  w-[400px]">
                  <TbArrowBackUp className="text-[50px] text-pri" />
                  <div>
                    <h4 className="font-medium">30 DAYS RETURN</h4>
                    <p className="text-sm mt-[7px]">
                      Simply return it within 24 days for an exchange.
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item lg={3}>
                <div className="flex gap-[21px]  w-[400px]">
                  <FaShippingFast className="text-[50px] text-pri" />
                  <div>
                    <h4 className="font-medium">FREE SHIPPING</h4>
                    <p className="text-sm mt-[7px]">
                      Free shipping on all US order or order above $99
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        {/* footer */}
      </div>
      <Footer />
    </div>
  );
}
