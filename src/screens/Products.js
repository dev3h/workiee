import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import {
  Container,
  Breadcrumbs,
  Grid,
} from "@mui/material";

import { FaRegSquare } from "react-icons/fa";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FcGrid } from "react-icons/fc";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {
  getCollections,
  getProductTypes,
  getWomenColors,
  getWomenProducts,
} from "../services/api";
import { addProduct } from "../reducers/productSlice";
import FilterSideBar from "../components/filterSideBar/FilterSideBar";
export default function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [womenProduct, setWomenProduct] = useState([]);
  const [classView, setClassView] = useState("grid-cols-4");
  const onChangeView = (type) => () => {
    switch (type) {
      case "oneCol":
        setClassView("grid-cols-1");
        break;
      case "twoCols":
        setClassView("grid-cols-2");
        break;
      case "threeCols":
        setClassView("grid-cols-3");
        break;
      case "fourCols":
        setClassView("grid-cols-4");
        break;
      default:
        setClassView("grid-cols-4");
    }
  };
  const onMoveDetail = (item) => () => {
    navigate(`/detail/${item.id}`);
  };
  const addToCart = (item) => () => {
    dispatch(addProduct(item));
  };
  useEffect(() => {
    const getAllWomenProducts = async () => {
      let url = new URL(window.location.href);
      let productName = url.searchParams.get("name");
      const womenProducts = await getWomenProducts();
      setWomenProduct(womenProducts);
      if (productName !== "") {
        setWomenProduct(
          womenProducts?.filter((product) => {
            return product.name
              .toLowerCase()
              .includes(productName.toLowerCase());
          })
        );
      }
    };
    getAllWomenProducts();
  }, [window.location.href]);
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
      {/* products main */}
      <div className="products-main">
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
              <p>Women</p>
            </Breadcrumbs>
          </Container>
        </div>
        {/*  */}
        <div className="mt-[52px]">
          <Container maxWidth="lg">
            <Grid container spacing={2} columns={12}>
              {/* side bar */}
              <Grid item lg={4}>
                <FilterSideBar />
              </Grid>
              {/* grid products */}
              <Grid item lg={8}>
                {/* filter bar */}
                <div className="filter-products flex justify-between items-center">
                  <h2 className="font-medium text-2xl">
                    Women({womenProduct.length})
                  </h2>
                  <div className="flex items-center gap-3">
                    <select class="sort-position font-light cursor-pointer">
                      <option>Featured</option>
                      <option>Name Ascending</option>
                      <option>Name Descending</option>
                      <option>Date Ascending</option>
                      <option>Date Descending</option>
                      <option>Price Ascending</option>
                      <option>Price Descending</option>
                      <option>Best Selling</option>
                    </select>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <FaRegSquare
                        className="text-grey777 hover:text-black19"
                        onClick={onChangeView("oneCol")}
                      />
                      <BsFillGridFill
                        className="text-grey777 hover:text-black19"
                        onClick={onChangeView("twoCols")}
                      />
                      <BsFillGrid3X3GapFill
                        className="text-grey777 hover:text-black19"
                        onClick={onChangeView("threeCols")}
                      />
                      <FcGrid
                        className="text-black19"
                        onClick={onChangeView("fourCols")}
                      />
                    </div>
                  </div>
                </div>
                {/* grid products */}
                <div className={`grid ${classView} mt-[15px] gap-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4`}>
                  {/* product */}
                  {womenProduct.map((item, key) => (
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
                  ))}
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </motion.div>
  );
}
