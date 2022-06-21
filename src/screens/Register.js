import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Breadcrumbs, Grid } from "@mui/material";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {createAccount} from "../reducers/authSlice";
import { useDispatch } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Required!"),
      last_name: Yup.string().required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(createAccount(values));
    },
  });
  return (
    <div className="wrapper">
      {/* header */}
      <div>
        <Header />
      </div>
      <div className="register-main">
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
                to={"/login"}
                className="transition-all duration-500 hover:text-pri"
              >
                Account
              </Link>
              <p>Create Account</p>
            </Breadcrumbs>
          </Container>
        </div>
        <Container maxWidth="lg">
          <h1 class="text-center font-medium text-[34px] leading-[44px] py-[50px]">
            CREATE AN ACCOUNT
          </h1>
          {/* register form */}
          <div className="w-[580px] mx-auto py-8 px-[39px] border border-solid border-whiteE9">
            <h2 class="text-xl font-medium pb-[14px]">PERSONAL INFORMATION</h2>
            <form onSubmit={formik.handleSubmit}>
              {/* first name */}
              <div className="mb-5">
                <label
                  className="flex items-center gap-1 pb-1"
                  htmlFor="firstName"
                >
                  First Name<span>*</span>
                </label>
                <input
                  name="first_name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  className="block w-full h-10 py-[2px] pl-[15px] pr-3 border border-solid border-whiteF7 rounded-md bg-whiteF7 transition-all duration-300 focus:border-pri focus: outline-none"
                  id="firstName"
                  placeholder="Enter First Name"
                />
                {formik.errors.first_name && formik.touched.first_name && (
                  <span className="text-sm text-red-600">
                    {formik.errors.first_name}
                  </span>
                )}
              </div>
              {/* last name */}
              <div className="mb-5">
                <label
                  className="flex items-center gap-1 pb-1"
                  htmlFor="lastName"
                >
                  Last Name<span>*</span>
                </label>
                <input
                  name="last_name"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  className="block w-full h-10 py-[2px] pl-[15px] pr-3 border border-solid border-whiteF7 rounded-md bg-whiteF7 transition-all duration-300 focus:border-pri focus: outline-none"
                  id="lastName"
                  placeholder="Enter First Name"
                />
                {formik.errors.last_name && formik.touched.last_name && (
                  <span className="text-sm text-red-600">
                    {formik.errors.last_name}
                  </span>
                )}
              </div>
              {/* email */}
              <div className="mb-5">
                <label className="flex items-center gap-1 pb-1" htmlFor="email">
                  Email<span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="block w-full h-10 py-[2px] pl-[15px] pr-3 border border-solid border-whiteF7 rounded-md bg-whiteF7 transition-all duration-300 focus:border-pri focus: outline-none"
                  id="email"
                  placeholder="Enter Email"
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
                  Password<span>*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className="block w-full h-10 py-[2px] pl-[15px] pr-3 border border-solid border-whiteF7 rounded-md bg-whiteF7 transition-all duration-300 focus:border-pri focus: outline-none"
                  id="password"
                  placeholder="Enter Password"
                />
                {formik.errors.password && formik.touched.password && (
                  <span className="text-sm text-red-600">
                    {formik.errors.password}
                  </span>
                )}
              </div>
              {/* confirm password */}
              <div className="mb-5">
                <label
                  className="flex items-center gap-1 pb-1"
                  htmlFor="cfmPassword"
                >
                  Confirm Password<span>*</span>
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  value={formik.values.confirm_password}
                  onChange={formik.handleChange}
                  className="block w-full h-10 py-[2px] pl-[15px] pr-3 border border-solid border-whiteF7 rounded-md bg-whiteF7 transition-all duration-300 focus:border-pri focus: outline-none"
                  id="cfmPassword"
                  placeholder="Enter Confirm Password"
                />
                {formik.errors.confirm_password &&
                  formik.touched.confirm_password && (
                    <span className="text-sm text-red-600">
                      {formik.errors.confirm_password}
                    </span>
                  )}
              </div>
              <div>
                <button
                  type="submit"
                  className="h-10 py-[6px] px-[29px] border-2 border-solid border-pri rounded-md transition-all duration-300 hover:bg-pri hover:text-white"
                >
                  CREATE
                </button>
                <p className="mt-3 text-sm">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="text-pri transition-all duration-300 hover:text-black19"
                  >
                    LOGIN
                  </Link>
                </p>
              </div>
            </form>
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
