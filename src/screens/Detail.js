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
  const params = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    const getDetail = async () => {
      const result = await getProductDetail(params.id);
      setProductDetail(result);
    };
    getDetail();
  }, []);
  const dispatch = useDispatch();
  const addToCart = (item) => () => {
    dispatch(addProduct(item));
  };
  return (
    <div className="wrapper">
      {/* header */}
      <div>
        <Header />
      </div>
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
                to={"/"}
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
                  <Grid item lg={6}>
                    <div>
                      <h1 className="font-medium text-3xl">
                        {productDetail.name}
                      </h1>
                      <div className="font-medium text-3xl text-pri">
                        ${productDetail.price}
                      </div>
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
                          className="px-4 py-[9px] bg-pri text-white flex items-center justify-center h-full gap-[5px] rounded-md w-60"
                        >
                          <HiOutlineShoppingBag />
                          <span>ADD TO CART</span>
                        </button>
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
                  <TabPanel value="1" className="p-0">
                    {" "}
                    {productDetail?.description?.map((item) => (
                      <p className="text-sm mt-4 text-grey777">{item}</p>
                    ))}
                  </TabPanel>
                  <TabPanel value="2">Item Two</TabPanel>
                  <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
              </Box>
             
            </div>
          </Container>
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
