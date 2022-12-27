import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Container, Breadcrumbs, Grid } from "@mui/material";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { createAccount } from "../reducers/authSlice";
export default function Login() {
  const account = useSelector((store) => store.authSlice.account);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isViewPass, setIsViewPass] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
    }),
    onSubmit: (values) => {
      dispatch(createAccount(values));
      if (
        values.email === account.email &&
        values.password === account.password
      ) {
        alert("login success");
        navigate("/");
      } else {
        alert("login failed");
      }
    },
  });
  const onChangeViewPass = () => {
    setIsViewPass(!isViewPass);
  };
  useEffect(() => {
    if (account) {
      navigate("/");
    }
  }, [account]);
  return (
    <div className="wrapper">
      {/* header */}
      <div>
        <Header />
      </div>
      <div className="login-main">
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
              <p>Account</p>
            </Breadcrumbs>
          </Container>
        </div>
        <Container maxWidth="lg">
          <h1 className="text-center font-medium text-[34px] leading-[44px] py-[50px]">
            ALREADY REGISTERED?
          </h1>
          <Grid container spacing={2} columns={12}>
            <Grid item lg={6}>
              <div className="h-full py-8 px-[39px] border border-solid border-whiteE9">
                <h2 className="text-xl font-medium pb-[14px]">NEW CUSTOMER</h2>
                <p className="text-sm text-grey777">
                  By creating an account with our store, you will be able to
                  move through the checkout process faster, store multiple
                  shipping addresses, view and track your orders in your account
                  and more.
                </p>

                <Link
                  to={"/register"}
                  className="flex justify-center items-center w-fit mt-[25px] h-10 py-[6px] px-[29px] border-2 border-solid border-pri rounded-md transition-all duration-300 hover:bg-pri hover:text-white"
                >
                  CREATE AN ACCOUNT
                </Link>
              </div>
            </Grid>
            {/* login form */}
            <Grid item lg={6}>
              <div className="login-form py-8 px-[39px] border border-solid border-whiteE9">
                <h2 className="text-xl font-medium pb-[14px]">LOGIN</h2>
                <p> If you have an account with us, please log in.</p>
                <form onSubmit={formik.handleSubmit} className="mt-[17px]">
                  {/* email */}
                  <div className="mb-5">
                    <label
                      className="flex items-center gap-1 pb-1"
                      htmlFor="email"
                    >
                      E-MAIL<span>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      className="block w-full h-10 py-[2px] pl-[15px] pr-3 border border-solid border-whiteF7 rounded-md bg-whiteF7 transition-all duration-300 focus:border-pri focus: outline-none"
                      id="email"
                      placeholder="Enter E-mail"
                    />
                    {formik.errors.email && formik.touched.email && (
                      <span className="text-sm text-red-600">
                        {formik.errors.email}
                      </span>
                    )}
                  </div>
                  {/* password */}
                  <div className="mb-5">
                    <label
                      className="flex items-center gap-1 pb-1"
                      htmlFor="password"
                    >
                      PASSWORD <span>*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={isViewPass ? "text" : "password"}
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        className="block w-full h-10 py-[2px] pl-[15px] pr-3 border border-solid border-whiteF7 rounded-md bg-whiteF7 transition-all duration-300 focus:border-pri focus: outline-none"
                        id="password"
                        placeholder="Enter Password"
                      />
                      <div
                        onClick={onChangeViewPass}
                        className="absolute top-1/2 right-3 -translate-y-1/2"
                      >
                        {isViewPass ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </div>
                    </div>
                    {formik.errors.password && formik.touched.password && (
                      <span className="text-sm text-red-600">
                        {formik.errors.password}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      type="submit"
                      className="h-10 py-[6px] px-[29px] border-2 border-solid border-pri rounded-md transition-all duration-300 hover:bg-pri hover:text-white"
                    >
                      Login
                    </button>
                    <Link
                      to={"/"}
                      className="text-sm text-pri transition-all duration-300 hover:text-black19"
                    >
                      Forgot your password
                    </Link>
                  </div>
                </form>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
