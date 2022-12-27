import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Breadcrumbs, Grid, Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsHeadset } from "react-icons/bs";
import { TbArrowBackUp } from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { getProductDetail } from "../services/api";
import { addProduct } from "../reducers/productSlice";

export default function Detail() {
  const dispatch = useDispatch();
  const params = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [value, setValue] = useState("1");
  const [checkTerm, setCheckTerm] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const isCheckTerm = () => {
    setCheckTerm(!checkTerm);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const addToCart = (item) => () => {
    dispatch(addProduct(item));
  };
  function logit() {
    setScrollY(window.pageYOffset);
  }
  useEffect(() => {
    const getDetail = async () => {
      const result = await getProductDetail(params.id);
      setProductDetail(result);
    };
    getDetail();
  }, []);
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);
  return (
    <div className="wrapper">
      {/* header */}
      <Header />
      <div className="detail-main">
        {/* breadcrumb */}
        <div className="bg-whiteF7">
          <Container maxWidth="lg">
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                to={"/"}
                className="transition-all duration-500 hover:text-pri"
              >
                Home
              </Link>
              <Link
                to={"/products"}
                className="transition-all duration-500 hover:text-pri"
              >
                Women
              </Link>
              <p>{productDetail?.name}</p>
            </Breadcrumbs>
          </Container>
        </div>
        {/* detail */}
        <div className="mt-[52px]">
          <Container maxWidth="lg">
            <Grid container spacing={3} columns={12}>
              <Grid item lg={9}>
                <Grid container spacing={3} columns={12}>
                  {/* image product */}
                  <Grid item lg={6}>
                    <div>
                      <img src={productDetail.image} alt={productDetail.name} />
                    </div>
                  </Grid>
                  {/* content */}
                  <Grid item lg={6}>
                    <div>
                      <span>
                        Sku:{" "}
                        <span className="text-grey999">
                          {productDetail.sku}
                        </span>
                      </span>
                      <h1 className="font-medium text-3xl">
                        {productDetail.name}
                      </h1>
                      <div className="font-medium text-3xl text-pri">
                        ${productDetail.price}
                      </div>
                      <div className="mb-[21px]">Tax included.</div>
                      <div>{productDetail.star}</div>
                      <div className="flex justify-between items-center mt-[33px] h-[50px]">
                        {/* <div className="flex h-full bg-whiteF7">
                          <button className="block w-[50px] h-full text-xl  transition-all duration-300 text-whiteD8 hover:text-black19">
                            -
                          </button>
                          <input
                            type="text"
                            value="1"
                            className="block w-[50px] h-full text-center bg-whiteF7"
                          />
                          <button className="block w-[50px] h-full  text-xl transition-all duration-300 text-whiteD8 hover:text-black19">
                            +
                          </button>
                        </div> */}
                        <button
                          onClick={addToCart(productDetail)}
                          className="px-4 py-[9px] bg-pri text-white flex items-center justify-center h-full gap-[5px] rounded-md w-60 transition-all duration-300 ease-in-out hover:bg-[#2267d8]"
                        >
                          <HiOutlineShoppingBag />
                          <span>ADD TO CART</span>
                        </button>
                      </div>
                      <div className="mt-[21px]">
                        <label
                          htmlFor="term"
                          className="flex gap-1 items-center"
                        >
                          <input
                            onClick={isCheckTerm}
                            type="checkbox"
                            id="term"
                          />
                          I agree with the terms and conditions
                        </label>
                      </div>
                      <button
                        className="block w-full mt-5 py-[19px] px-[7px] rounded-md bg-[#f8dc68] font-medium text-sm transition-all duration-300 ease-in-out  hover:bg-[#dfc65d]"
                        style={{
                          pointerEvents: checkTerm ? "auto" : "none",
                          opacity: checkTerm ? "1" : "0.5",
                        }}
                      >
                        BUY IT NOW
                      </button>
                      <div className="mt-[33px]">
                        <ul>
                          <li className="h-[22px]">
                            Vendor:{" "}
                            <span className="text-grey999">
                              {productDetail.band}
                            </span>{" "}
                          </li>
                          <li className="h-[22px] mt-[6px]">
                            Product Type:{" "}
                            <span className="text-grey999">
                              {productDetail.type}
                            </span>
                          </li>
                          <li className="h-[22px]  mt-[6px]">
                            Barcode:{" "}
                            <span className="text-grey999">
                              {productDetail.code}
                            </span>
                          </li>
                          <li className="h-[22px]  mt-[6px]">
                            Tags:{" "}
                            {productDetail?.tags?.map((item, key) => (
                              <span key={key} className="mr-1">
                                {item.name}
                              </span>
                            ))}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              {/* services */}
              <Grid item lg={3}>
                <div className="py-[21px] px-[19px] border border-solid border-whiteE9">
                  <div className="flex gap-[21px] pb-[13px]">
                    <FaShippingFast className="text-[50px] text-pri" />
                    <div>
                      <h4 className="font-medium">FREE SHIPPING</h4>
                      <p className="text-sm mt-[7px]">
                        Free shipping on all US order or order above $99
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[21px] pt-[22px] pb-[13px]">
                    <BsHeadset className="text-[50px] text-pri" />
                    <div>
                      <h4 className="font-medium">SUPPORT 24/7</h4>
                      <p className="text-sm mt-[7px]">
                        Contact us 24 hours a day, 7 days a week
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[21px] pt-[22px]">
                    <TbArrowBackUp className="text-[50px] text-pri" />
                    <div>
                      <h4 className="font-medium">30 DAYS RETURN</h4>
                      <p className="text-sm mt-[7px]">
                        Simply return it within 24 days for an exchange.
                      </p>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
            {/* tab */}
            <div>
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab label="DESCRIPTION" value="1" />
                      <Tab label="GENERAL TAB" value="2" />
                      <Tab label="REVIEWS" value="3" />
                    </TabList>
                  </Box>
                  <TabPanel value="1" className="p-4">
                    {" "}
                    {productDetail?.description?.map((item, key) => (
                      <p key={key} className="text-sm mt-4 text-grey777">
                        {item}
                      </p>
                    ))}
                  </TabPanel>
                  <TabPanel value="2" className="p-4">
                    <table className="text-sm font-normal">
                      <tbody>
                        <tr className="h-10">
                          <td className="w-2/5">Color:</td>
                          <td className="text-grey777">
                            <div className="flex gap-2">
                              {productDetail?.general?.colors?.map(
                                (item, key) => (
                                  <span key={key}>{item}</span>
                                )
                              )}
                            </div>
                          </td>
                        </tr>
                        <tr className="h-10">
                          <td>Size:</td>
                          <td className="text-grey777">
                            <div className="flex gap-2">
                              {productDetail?.general?.sizes?.map(
                                (item, key) => (
                                  <span key={key}>{item}</span>
                                )
                              )}
                            </div>
                          </td>
                        </tr>
                        <tr className="h-10">
                          <td>Material:</td>
                          <td className="text-grey777">
                            {productDetail?.general?.material}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </TabPanel>
                  <TabPanel value="3">No review yet</TabPanel>
                </TabContext>
              </Box>
            </div>
            {/*  */}
          </Container>
          {scrollY > 500 && (
            <div className="fixed bottom-0 text-xl bg-black flex justify-center items-center gap-[52px] w-full h-[82px] py-[30px]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-10">
                  <img src={productDetail.image} alt={productDetail.name} />
                </div>
                <div className="text-white">
                  <h3 className="text-sm">{productDetail.name}</h3>
                  <div>${productDetail.price}</div>
                </div>
              </div>
              <button
                onClick={addToCart(productDetail)}
                className="px-4 py-[9px] bg-pri text-white flex items-center justify-center w-fit h-10 gap-[5px] rounded-md transition-all duration-300 ease-in-out hover:bg-[#2267d8]"
              >
                <HiOutlineShoppingBag />
                <span className="text-sm">ADD TO CART</span>
              </button>
            </div>
          )}
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
