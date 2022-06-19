import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Breadcrumbs, Grid } from "@mui/material";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiArrowBackOutline } from "react-icons/ti";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { changeQuantity, removeProduct } from "../reducers/productSlice";
export default function Cart() {
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.productSlice.cart);

  const onchangeQuantity = (type, item) => () => {
    if (type === "increase") {
      dispatch(
        changeQuantity({ ...item, quantity: Number(item?.quantity) + 1 })
      );
    } else {
      dispatch(
        changeQuantity({
          ...item,
          quantity: item?.quantity >= 1 ? Number(item?.quantity) - 1 : 0,
        })
      );
    }
  };
  const onRemoveProduct = (item) => () => {
    dispatch(removeProduct(item));
  };
  const onChangeInput = (item) => (ev) => {
    dispatch(changeQuantity({ ...item, quantity: ev.target.value }));
  };
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
            {/* table cart */}
            <div>
              <table className="w-full">
                <tbody>
                  {cartData.map((item, key) => (
                    <tr
                      className="w-[166px] border-y-[1px] border-solid border-whiteE9"
                      key={key}
                    >
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
                          <span className="font-medium">${item.price}</span>
                        </div>
                      </td>
                      {/* quantity product cart */}
                      <td className="w-[197.2px] py-5">
                        <div className="flex h-[50px] bg-whiteF7 w-[132px]">
                          <button
                            onClick={onchangeQuantity("reduce", item)}
                            className="block w-[50px] h-full text-xl  transition-all duration-300 text-whiteD8 hover:text-black19"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={item.quantity}
                            onChange={onChangeInput(item)}
                            className="block w-[50px] h-full text-center bg-whiteF7"
                          />
                          <button
                            onClick={onchangeQuantity("increase", item)}
                            className="block w-[50px] h-full  text-xl transition-all duration-300 text-whiteD8 hover:text-black19"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      {/* total price */}
                      <td className="w-[150.8px] py-5">
                        <div className="text-center">
                          <span className="font-medium">
                            ${item.quantity * item.price}
                          </span>
                        </div>
                      </td>
                      {/* delete product cart */}
                      <td className="w-[81.2px] py-5">
                        <div
                          onClick={onRemoveProduct(item)}
                          className="flex justify-end cursor-pointer"
                        >
                          <RiDeleteBinLine />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/*  */}
            <div className="flex justify-between mt-8">
              {/*  continue shopping */}
              <div>
                <Link
                  to={"/"}
                  className="flex gap-[6px] text-sm transition-all duration-300 text-pri hover:text-black19"
                >
                  <TiArrowBackOutline />
                  CONTINUE SHOPPING
                </Link>
              </div>
              {/*  clear shopping cart */}
              <div>
                <button className="flex gap-[6px] text-sm transition-all duration-300 text-pri hover:text-black19">
                  <RiDeleteBinLine />
                  CLEAR SHOPPING CART
                </button>
              </div>
            </div>
            {/* check out */}
            <div className="mt-[50px] h-[490.4px]">
              <Grid
                container
                spacing={2}
                columns={24}
                className="h-full gap-3 justify-center"
              >
                <Grid item lg={8}>
                  {/* <div className="pt-8 pb-[35px] px-[39px] border border-solid border-whiteE9"></div> */}
                </Grid>
                <Grid item lg={7}>
                  {/* <div className="pt-8 pb-[35px] px-[39px] border border-solid border-whiteE9"></div> */}
                </Grid>
                <Grid item lg={8}>
                  {/* total */}
                  <div className="pt-8 pb-[35px] px-[39px] border border-solid border-whiteE9">
                    <table className="w-full text-left">
                      <tbody className="h-8 py-[5px]">
                        <tr>
                          <th>SUBTOTAL</th>
                          <td>
                            <span>$585.00</span>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot className="h-[58px] pt-[19px] pb-[17px]">
                        <tr>
                          <th>GRAND TOTAL</th>
                          <td className="text-2xl text-pri">
                            <span>$585.00</span>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                    {/* term */}
                    <div className="mt-[9px] mb-[31px]">
                      <label
                        htmlFor="cart-term"
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input type="checkbox" id="cart-term" />I agree with the
                        terms and conditions
                      </label>
                    </div>
                    {/* check out btn*/}
                    <button className="py-[6px] px-[31px] bg-pri h-10 text-white rounded-md">
                      PROCEED TO CHECKOUT
                    </button>
                  </div>
                </Grid>
              </Grid>
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
