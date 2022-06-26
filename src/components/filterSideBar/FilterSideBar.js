import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  getCollections,
  getProductTypes,
  getWomenColors,
} from "../../services/api";
export default function FilterSideBar() {
  const [collection, setCollection] = useState([]);
  const [productType, setProductType] = useState([]);
  const [womenColor, setWomenColor] = useState([]);
  const [selectedProductType, setSelectedProductType] = useState([]);
  const onChangeProductType = (productType) => () => {
    if (selectedProductType?.includes(productType.id)) {
      const newSelectedProductType = selectedProductType.filter(
        (item) => item !== productType.id
      );
      console.log(newSelectedProductType);
      setSelectedProductType(newSelectedProductType);
    } else {
      setSelectedProductType([...selectedProductType, productType.id]);
    }
    console.log(productType.id);
  };

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
  return (
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
                  checked={selectedProductType?.includes(item?.id)}
                  onChange={onChangeProductType(item)}
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
                <input type="checkbox" id={item.id} className="mr-1 hidden" />
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
  );
}
