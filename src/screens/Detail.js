import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Breadcrumbs, Grid } from "@mui/material";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { getProductDetail } from "../services/api";
export default function Detail() {
  const params = useParams();
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    const getDetail = async () => {
      const result = await getProductDetail(params.id);
      setProductDetail(result);
    };
    getDetail();
  }, []);
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
        <div>
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
                        <div className="flex h-full bg-whiteF7">
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
                        </div>
                        <button className="px-4 py-[9px] bg-pri text-white flex items-center justify-center h-full gap-[5px] rounded-md w-60">
                          <HiOutlineShoppingBag />
                          <span>ADD TO CART</span>
                        </button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item lg={3}>
                xs=8
              </Grid>
            </Grid>
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
