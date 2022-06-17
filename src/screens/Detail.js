import React from "react";
import { Link } from "react-router-dom";
import { Container, Breadcrumbs, Grid } from "@mui/material";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
export default function Detail() {
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
              <p></p>
            </Breadcrumbs>
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
