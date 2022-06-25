import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { Container, Grid } from "@mui/material";
import { BsHeadset } from "react-icons/bs";
import { TbArrowBackUp } from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { getCategories, getWomenProducts } from "../services/api";
import { addProduct } from "../reducers/productSlice";
export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [womenProduct, setWomenProduct] = useState([]);
  const onMoveDetail = (item) => () => {
    navigate(`/detail/${item.id}`);
  };
  const addToCart = (item) => () => {
    dispatch(addProduct(item));
  };
  const onMoveToProduct = () => {
    navigate("/products", { replace: true });
  };
  useEffect(() => {
    const getAllCategories = async () => {
      const categories = await getCategories();
      setCategory(categories);
    };
    getAllCategories();
  }, []);
  useEffect(() => {
    const getAllWomenProducts = async () => {
      const womenProducts = await getWomenProducts();
      setWomenProduct(womenProducts);
    };
    getAllWomenProducts();
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
    adaptiveHeight: true,
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
  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* header */}
      <div>
        <Header />
      </div>
      <div className="home-main mt-8">
        {/* hero carousel */}
          <div className="carousel h-full px-[17px] sm:hidden md:hidden lg:block">
            <Grid container spacing={2} lg={12} className="justify-between">
              <Grid item lg="8" md="12">
                <div className="h-full">
                  <Slider {...settings} className="h-full">
                    <div className="relative h-full">
                      <img
                        className="relative rounded-md h-full"
                        src={require("../assets/images/hero/img1.webp")}
                        alt=""
                      />
                      <div className="absolute top-[30%] left-[10%] z-20 text-white  sm:hidden md:hidden lg:block">
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
                </div>
              </Grid>
              <Grid item lg="4" md="12" className="md:hidden lg:block">
                <div className="group h-[482.56px] relative cursor-pointer md:hidden lg:block">
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
        <div>
          <Container>
            {/* banner */}
            <div className="py-10">
              <img src={require("../assets/images/banner/img1.gif")} alt="" />
            </div>
            {/* category */}
            <div className="category p-5">
              <h3 className="mb-8 text-center text-2xl font-medium">
                TOP CATEGORIES
              </h3>
              <Grid container spacing={2} lg={12}>
                {category.map((item, key) => (
                  <Grid item sm="6" md="4" lg="2" key={key}>
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
            <div className="mt-[52px]">
              <div className="text-center font-medium mb-8">
                <h2 className="text-2xl">BEST SELLER</h2>
                <div className="text-sm mt-[2px]">TOP PRODUCTS OF THIS WEEK</div>
              </div>
              <div className={`grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-[15px] gap-5`}>
                {/* product */}
                {womenProduct
                  .map((item, key) => (
                    <div key={key} className="overflow-hidden group">
                      <img
                        onClick={onMoveDetail(item)}
                        className="cursor-pointer"
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="text-center pt-4 translate-y-10 transition-all duration-300  group-hover:translate-y-0">
                        <h6 className="text-xs text-[#999]">{item.band}</h6>
                        <div>{item.star}</div>
                        <h2 className="text-sm">{item.name}</h2>
                        <div className="font-medium">${item.price}</div>
                        <button
                          onClick={addToCart(item)}
                          className="px-4 py-[9px] bg-pri text-white flex items-center justify-center h-10 gap-[5px] rounded-md mx-auto mt-3"
                        >
                          <HiOutlineShoppingBag />
                          <span>ADD TO CART</span>
                        </button>
                      </div>
                    </div>
                  ))
                  .slice(0, 4)}
              </div>
            </div>
            {/* services */}
            <div className="mt-[52px]">
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
            </div>
          </Container>
        </div>

        {/* footer */}
      </div>
      <Footer />
    </motion.div>
  );
}
