import React from "react";
import { Link } from "react-router-dom";
import { Container, Breadcrumbs, Grid } from "@mui/material";
import { RiDeleteBinLine } from "react-icons/ri";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useSelector, useDispatch } from "react-redux";
export default function Cart() {
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.productSlice.cart);
  console.log(cartData);
  return (
    <div className="wrapper">
      {/* header */}
      <div>
        <Header />
      </div>
      {/* cart main */}
      <div className="cart-main">
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
              <p>Your Shopping Cart</p>
            </Breadcrumbs>
          </Container>
        </div>
        <Container maxWidth="lg">
          <div className="mt-[52px]">
            <h1 className="text-[34px] font-medium text-center pb-[50px] leading-[44px] m-0">
              SHOPPING CART
            </h1>
            <div>
              <table className="w-full">
                <tbody>
                  {cartData.map((item) => (
                    <tr className="w-[166px] border-y-[1px] border-solid border-[#e9e7e7]">
                      {/* image product cart */}
                      <td className="w-[121px] py-5">
                        <div className="w-full h-[125px]">
                          <img
                            src={item.image}
                            alt=""
                            className="w-[100px] h-full"
                          />
                        </div>
                      </td>
                      {/* detail product cart */}
                      <td className="w-[424.2px] py-5">
                        <div className="text-sm">
                          <h2>{item.name}</h2>
                          <p className="mt-[5px]">COLOR: {item.color}</p>
                        </div>
                      </td>
                      {/* price product cart */}
                      <td className="w-[185.6px] py-5">
                        <div>
                          <span className="font-medium">{item.price}</span>
                        </div>
                      </td>
                      {/* quantity product cart */}
                      <td className="w-[197.2px] py-5">
                        <div className="flex h-[50px] bg-whiteF7 w-[132px]">
                          <button className="block w-[50px] h-full text-xl  transition-all duration-300 text-whiteD8 hover:text-black19">
                            -
                          </button>
                          <input
                            type="text"
                            defaultValue={1}
                            className="block w-[50px] h-full text-center bg-whiteF7"
                          />
                          <button className="block w-[50px] h-full  text-xl transition-all duration-300 text-whiteD8 hover:text-black19">
                            +
                          </button>
                        </div>
                      </td>
                      {/* total price */}
                      <td className="w-[150.8px] py-5">
                        <div className="text-center">
                          <span className="font-medium">$400.00</span>
                        </div>
                      </td>
                      {/* delete product cart */}
                      <td className="w-[81.2px] py-5">
                        <div className="flex justify-end">
                          <RiDeleteBinLine />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
