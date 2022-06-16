import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import {CgSearch} from "react-icons/cg";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import {BsSliders} from "react-icons/bs";
export default function Header() {
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
          <Grid item lg={2} className="">
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
              <Link to="/" className="uppercase text-violet-500">
                home
              </Link>
              <Link to="/" className="uppercase hover:text-violet-500">
                shop
              </Link>
              <Link to="/" className="uppercase hover:text-violet-500">
                page
              </Link>
              <Link to="/" className="uppercase hover:text-violet-500">
                blog
              </Link>
              <Link to="/" className="uppercase hover:text-violet-500">
                portfolio
              </Link>
              <Link to="/" className="uppercase hover:text-violet-500">
                women
              </Link>
              <Link to="/" className="uppercase hover:text-violet-500">
                men
              </Link>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="flex justify-end items-center gap-4">
              <CgSearch className="cursor-pointer hover:text-violet-500 text-lg"/>
              <HiOutlineShoppingBag className="cursor-pointer hover:text-violet-500 text-lg"/>
              <HiOutlineUser className="cursor-pointer hover:text-violet-500 text-lg"/>
              <BsSliders className="cursor-pointer hover:text-violet-500 text-lg"/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
