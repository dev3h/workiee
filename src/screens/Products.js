import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Breadcrumbs,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { RiArrowDropDownLine } from "react-icons/ri";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { getCollections, getProductTypes, getColors } from "../services/api";
export default function Products() {
  const [collection, setCollection] = useState([]);
  const [productType, setProductType] = useState([]);
  const [color, setColor] = useState([]);
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
      setCollection(productTypes);
    };
    getAllProductTypes();
  }, []);

  return (
    <div className="wrapper">
      {/* header */}
      <div>
        <Header />
      </div>
      {/* products main */}
      <div className="products-main">
        {/* breadcrumb */}
        <div className="bg-slate-200">
          <Container maxWidth="lg">
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                to={"/"}
                className="transition-all duration-500 hover:text-violet-500"
              >
                Home
              </Link>
              <p>Women</p>
            </Breadcrumbs>
          </Container>
        </div>
        {/*  */}
        <div>
          <Container maxWidth="lg">
            <Grid container spacing={2} columns={12}>
              <Grid item lg={4}>
                <div>
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
                        <p className="p-1" key={key}>
                          <Link
                            to={"/"}
                            className="transition-all duration-500 hover:text-violet-500"
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
                      {collection.map((item, key) => (
                        <p className="p-1" key={key}>
                          <label
                            for={item.id}
                            className="cursor-pointer transition-all duration-500 hover:text-violet-500"
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
                    <AccordionDetails>
                      {color.map((item, key) => (
                        <p className="p-1" key={key}>
                          <label
                            for={item.id}
                            className="cursor-pointer transition-all duration-500 hover:text-violet-500"
                          >
                            <input
                              type="checkbox"
                              id={item.id}
                              className="mr-1"
                            />
                            <div></div>
                          </label>
                        </p>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Grid>
              <Grid item lg={8}>
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
