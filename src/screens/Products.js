import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Container,
  Breadcrumbs,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { RiArrowDropDownLine } from "react-icons/ri";
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
export default function Products() {
  const [collection, setCollection] = useState([]);
  const [productType, setProductType] = useState([]);
  const [womenColor, setWomenColor] = useState([]);
  const [womenProduct, setWomenProduct] = useState([]);
  useEffect(() => {
    const getAllCollections = async () => {
      const collections = await getCollections();
      setCollection(collections);
    };
    getAllCollections();
  }, []);
  useEffect(() => {
    const getAllProductTypes = async () => {
      const productTypes = await getProductTypes();
      setProductType(productTypes);
    };
    getAllProductTypes();
  }, []);
  useEffect(() => {
    const getAllWomenColors = async () => {
      const womenColors = await getWomenColors();
      setWomenColor(womenColors);
    };
    getAllWomenColors();
  }, []);
  useEffect(() => {
    const getAllWomenProducts = async () => {
      let url = new URL(window.location.href);
      let productName = url.searchParams.get("name");
      const womenProducts = await getWomenProducts();
      setWomenProduct(womenProducts);
      if(productName !== '') {
        setWomenProduct(  womenProducts?.filter((product) => {
          return product.name.toLowerCase().includes(productName.toLowerCase());
        }
        ));
      } 
    };
    getAllWomenProducts();
  }, [window.location.href]);
  const navigate = useNavigate();
  const onMoveDetail = (item) => () => {
    navigate(`/detail/${item.id}`);
  };
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
                <div className="pr-[50px]">
                  {/* COLLECTIONS */}
                  <Accordion className="text-unset">
                    <AccordionSummary
                      expandIcon={<RiArrowDropDownLine />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <h4 className="font-medium">COLLECTIONS</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                      {collection.map((item, key) => (
                        <p className="p-1 font-light" key={key}>
                          <Link
                            to={"/"}
                            className="transition-all duration-500 hover:text-pri"
                          >
                            {item.name}
                          </Link>
                        </p>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                  {/* PRODUCT TYPE */}
                  <Accordion className="text-unset">
                    <AccordionSummary
                      expandIcon={<RiArrowDropDownLine />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <h4 className="font-medium">PRODUCT TYPE</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                      {productType.map((item, key) => (
                        <p className="p-1" key={key}>
                          <label
                            htmlFor={item.id}
                            className="font-light cursor-pointer transition-all duration-500 hover:text-pri"
                          >
                            <input
                              type="checkbox"
                              id={item.id}
                              className="mr-1"
                            />
                            {item.name}
                          </label>
                        </p>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                  {/* COLOR */}
                  <Accordion className="text-unset">
                    <AccordionSummary
                      expandIcon={<RiArrowDropDownLine />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <h4 className="font-medium">COLOR</h4>
                    </AccordionSummary>
                    <AccordionDetails className="flex flex-wrap">
                      {womenColor.map((item, key) => (
                        <div className="p-1" key={key}>
                          <label
                            htmlFor={item.id}
                            className="cursor-pointer transition-all duration-500 hover:text-pri"
                          >
                            <input
                              type="checkbox"
                              id={item.id}
                              className="mr-1 hidden"
                            />
                            <div
                              className="w-8 h-8 rounded-md"
                              title={item.name}
                              style={{ background: `${item.hexId}` }}
                            ></div>
                          </label>
                        </div>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </div>
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
                      <FaRegSquare className="text-grey777 hover:text-black19" />
                      <BsFillGridFill className="text-grey777 hover:text-black19" />
                      <BsFillGrid3X3GapFill className="text-grey777 hover:text-black19" />
                      <FcGrid className="text-black19" />
                    </div>
                  </div>
                </div>
                {/* grid products */}
                <div className="grid grid-cols-4 mt-[15px] gap-5">
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
    </div>
  );
}
