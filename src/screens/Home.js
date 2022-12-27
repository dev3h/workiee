import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { Container, Grid } from "@mui/material";
import { BsHeadset, BsChat } from "react-icons/bs";
import { TbArrowBackUp } from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { getCategories, getWomenProducts, getBlogs } from "../services/api";
import { addProduct } from "../reducers/productSlice";

const carousels = [
  {
    id: 1,
    image: require("../assets/images/hero/img1.webp"),
    title: "1st Ecommerce Theme <br />  Recommended by EnvatoTuts+",
  },
  {
    id: 2,
    image: require("../assets/images/hero/img2.webp"),
    title: "Optimised <br /> for Dropshipping",
  },
  {
    id: 3,
    image: require("../assets/images/hero/img3.webp"),
    title: "Premium Customer <br /> Support Service",
  },
];
export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [womenProduct, setWomenProduct] = useState([]);
  const [blog, setBlog] = useState([]);
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
  useEffect(() => {
    const getAllBlog = async () => {
      const blogs = await getBlogs();
      setBlog(blogs);
    };
    getAllBlog();
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
    <div>
      <Header />
      <div className="py-5 home-main">
        <Container>
          {/* category */}
          <div className="p-5 category">
            <Grid container spacing={2} lg={12}>
              {category.map((item, key) => (
                <Grid item sm="6" md="4" lg="2" key={key}>
                  <div className="relative overflow-hidden cursor-pointer h-28 group">
                    <img
                      src={item.image}
                      alt=""
                      className="object-top h-full transition-all duration-500 ease-in-out group-hover:scale-110"
                    />
                    <button
                      className="absolute h-12 font-medium transition-all duration-500 ease-in-out rounded-md top-2/4 left-2/4 w-28 bg-white/80 group-hover:bg-violet-500/80 group-hover:text-white"
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
            <div className="mb-8 font-medium text-center">
              <h2 className="text-2xl">Bán chạy nhất</h2>
            </div>
            <div
              className={`grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-[15px] gap-5`}
            >
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
                    <div className="pt-4 text-center transition-all duration-300 translate-y-10 group-hover:translate-y-0">
                      <h6 className="text-xs text-[#999]">{item.band}</h6>
                      <div>{item.star}</div>
                      <h2 className="text-sm">{item.name}</h2>
                      <div className="font-medium">${item.price}</div>
                      <button
                        onClick={addToCart(item)}
                        className="px-4 py-[9px] bg-pri text-white flex items-center justify-center h-10 gap-[5px] rounded-md mx-auto mt-3"
                      >
                        <HiOutlineShoppingBag />
                        <span>Thêm vào giỏ hàng</span>
                      </button>
                    </div>
                  </div>
                ))
                .slice(0, 4)}
            </div>
          </div>
          <div className="mt-[52px]">
            <div className="mb-8 font-medium text-center">
              <h2 className="text-2xl">LATEST FROM BLOG</h2>
              <div className="text-sm mt-[2px]">THE FRESHEST AND MOST EXCITING NEWS</div>
            </div>
            <Grid container spacing={2} columns={12}>
              {blog
                .map((item, key) => (
                  <Grid item lg={4}>
                    <div key={key} className="overflow-hidden group h-[420px]">
                      <div className="relative">
                        <img
                          onClick={onMoveDetail(item)}
                          className="cursor-pointer"
                          src={item.image}
                          alt={item.title}
                        />
                        <div className="absolute -bottom-[30%] left-1/2 -translate-x-1/2 w-10/12 pt-[22px] px-[15px] pb-[10px] rounded-t-md bg-white text-center transition-all duration-300 ease-in-out group-hover:scale-110">
                          <div className="text-sm transition-all duration-300 ease-in-out cursor-pointer text-pri hover:text-black19">
                            {item.tag}
                          </div>
                          <div className="mt-[7px] text-xl font-medium cursor-pointer transition-all duration-300 ease-in-out hover:text-pri">
                            {item.title}
                          </div>
                          <p className="mt-4 text-sm font-light text-grey777">
                            {item.description}
                          </p>
                          <div className="flex justify-center mt-[10px] gap-5">
                            <div className="flex gap-1 text-xs text-grey999">
                              <span>by</span>
                              <span className="text-black19">{item.author}</span>
                              <span>{item.date}</span>
                            </div>
                            <div className="flex gap-2 text-xs">
                              <BsChat />
                              {item.comment}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                ))
                .slice(0, 3)}
            </Grid>
            <div
              className={`grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[15px] gap-5`}
            >
              {/* product */}
            </div>
          </div>
          {/* services */}
          <div className="mt-[52px]">
            <Grid container spacing={2} columns={12} className="justify-between">
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
        {/* footer */}
      </div>
      <Footer />
    </div>
  );
}
