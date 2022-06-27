import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Grid, Badge } from "@mui/material";
import { CgSearch } from "react-icons/cg";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { BsSliders } from "react-icons/bs";
import { BiLock, BiGitCompare } from "react-icons/bi";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/authSlice";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const cart = useSelector((store) => store.productSlice.cart);
  const account = useSelector((store) => store.authSlice.account);
  const [scrollY, setScrollY] = useState(0);
  const onShowMenu = () => {
    setShow(!show);
  };
  const onHandlerAuth = () => {
    account && dispatch(logout());
    navigate("/login");
  };
  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const onSearch = () => {
    searchValue && navigate(`/products/?name=${searchValue}`);
  };
  function logit() {
    setScrollY(window.pageYOffset);
  }
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
    <div className={`header w-full h-14 flex items-center shadow-[0_0_8px_rgba(0,0,0,0.2)]`}>
      <Container fixed>
        <Grid
          container
          spacing={2}
          columns={12}
          alignItems="center"
          justifyContent="center"
          className="h-12"
        >
          <Grid item lg={2}>
            <Link to="/" className="inline-block w-24 h-full">
              <img
                src={require("../../assets/images/Logo.webp")}
                alt="logo"
                className="w-24"
              />
            </Link>
          </Grid>
          <Grid item lg={6}>
            <div className="flex justify-start items-center gap-6 sm:hidden md:hidden lg:flex">
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
              <div className="relative flex-grow">
                <input
                  onChange={onChangeSearch}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      onSearch();
                    }
                  }}
                  type="text"
                  className="inline-block w-full h-full pl-[5px] pr-[2px] border-b border-solid text-sm focus:outline-none"
                  placeholder="Search"
                />
                <CgSearch
                  onClick={onSearch}
                  className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:text-pri text-lg"
                  title="search"
                />
              </div>
              <Link to={"/cart"}>
                <Badge badgeContent={cart.length} color="primary">
                  <HiOutlineShoppingBag
                    className="cursor-pointer transition-all duration-300 hover:text-pri text-lg"
                    title="cart"
                  />
                </Badge>
              </Link>
              <div className="relative">
                {account ? (
                  <FaRegUserCircle
                    onClick={onShowMenu}
                    className="cursor-pointer transition-all duration-300 hover:text-pri text-lg"
                    title="My Account"
                    // style={{border:account?'1px solid #ccc':'none', borderRadius:account?'50%':'none', background:account?'#2879fe':'none', color:account?'#e9e7e7':'#191919'}}
                  />
                ) : (
                  <HiOutlineUser
                    onClick={onShowMenu}
                    className="cursor-pointer transition-all duration-300 hover:text-pri text-lg"
                    title="My Account"
                  />
                )}
                <div
                  className="absolute z-10 -right-4 top-6 w-[280px] h-[205.2px] py-[30px] pl-[39px] pr-5 bg-white shadow-[0_2px_5px_rgba(0,0,0,0.5)] transition-all duration-300"
                  style={{ display: show ? "block" : "none" }}
                >
                  {account ? (
                    <div className="flex gap-1 h-[28.8px]">
                      <HiOutlineUser />
                      Account
                    </div>
                  ) : (
                    <div>
                      <div>
                        <Link to={"/login"} className="flex gap-1 h-[28.8px]">
                          <BiLock />
                          Sign In
                        </Link>
                      </div>
                      <div>
                        <Link
                          to={"/register"}
                          className="flex gap-1 h-[28.8px]"
                        >
                          <HiOutlineUser />
                          Register
                        </Link>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-1 h-[28.8px]">
                    <HiOutlineShoppingBag />
                    View Cart
                  </div>
                  <div className="flex gap-1 h-[28.8px]">
                    <FaRegHeart />
                    Wishlist
                  </div>
                  <div className="flex gap-1 h-[28.8px]">
                    <BiGitCompare />
                    Compare
                  </div>
                  {account ? (
                    <div
                      onClick={onHandlerAuth}
                      className="flex gap-1 h-[28.8px] cursor-pointer"
                    >
                      <FiLogOut />
                      Logout
                    </div>
                  ) : (
                    <div></div>
                  )}
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
