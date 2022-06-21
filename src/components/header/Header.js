import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Badge, Menu, MenuItem } from "@mui/material";
import { CgSearch } from "react-icons/cg";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { BsSliders } from "react-icons/bs";
import { BiLock, BiGitCompare } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
export default function Header() {
  const [show, setShow] = useState(false);
  const onShowMenu = () => {
    setShow(!show);
  };
  const cart = useSelector((store) => store.productSlice.cart);
  return (
    <div className="header h-14 flex items-center">
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          columns={12}
          alignItems="center"
          justifyContent="center"
          className="h-12"
        >
          <Grid item lg={2}>
            <Link to="/" className="w-24 h-5">
              <img
                src={require("../../assets/images/Logo.webp")}
                alt="logo"
                className="w-24"
              />
            </Link>
          </Grid>
          <Grid item lg={6}>
            <div className="flex justify-center items-center gap-6">
              <Link to="/" className="uppercase text-pri">
                home
              </Link>
              <Link
                to="/"
                className="uppercase transition-all duration-300 hover:text-pri"
              >
                shop
              </Link>
              <Link
                to="/"
                className="uppercase transition-all duration-300 hover:text-pri"
              >
                page
              </Link>
              <Link
                to="/"
                className="uppercase transition-all duration-300 hover:text-pri"
              >
                blog
              </Link>
              <Link
                to="/"
                className="uppercase transition-all duration-300 hover:text-pri"
              >
                portfolio
              </Link>
              <Link
                to="/products"
                className="uppercase transition-all duration-300 hover:text-pri"
              >
                women
              </Link>
              <Link
                to="/"
                className="uppercase transition-all duration-300 hover:text-pri"
              >
                men
              </Link>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="flex justify-end items-center gap-4">
              <CgSearch
                className="cursor-pointer transition-all duration-300 hover:text-pri text-lg"
                title="search"
              />
              <Link to={"/cart"}>
                <Badge badgeContent={cart.length} color="primary">
                  <HiOutlineShoppingBag
                    className="cursor-pointer transition-all duration-300 hover:text-pri text-lg"
                    title="cart"
                  />
                </Badge>
              </Link>
              <div className="relative">
                <HiOutlineUser
                  className="cursor-pointer transition-all duration-300 hover:text-pri text-lg"
                  title="My Account"
                  onClick={onShowMenu}
                />
                <div
                  className="opacity-0 absolute z-10 right-0 top-6 w-[280px] h-[205.2px] py-[30px] pl-[39px] pr-5 bg-white shadow-[0_2px_5px_rgba(0,0,0,0.5)] transition-all duration-300"
                  style={{ opacity: show ? "1" : "0" }}
                >
                  <div>
                    <Link to={"/login"} className="flex gap-1 h-[28.8px]">
                      <BiLock />
                      Sign In
                    </Link>
                  </div>
                  <div className="flex gap-1 h-[28.8px]">
                    <HiOutlineUser />
                    Register
                  </div>
                  <div className="flex gap-1 h-[28.8px]">
                    <HiOutlineShoppingBag />
                    View Cart
                  </div>
                  <div className="flex gap-1 h-[28.8px]">
                    <FaRegHeart />
                    Wishlist
                  </div>
                  <div className="flex gap-1 h-[28.8px]">
                    <BiGitCompare />y Compare
                  </div>
                </div>
              </div>

              <BsSliders
                className="cursor-pointer transition-all duration-300 hover:text-pri text-lg"
                title="Settings"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
