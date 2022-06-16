import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer h-auto pb-14">
      {/* footer top */}
      <div className="bg-violet-500 h-16">
        <Container maxWidth="lg" className="h-full">
          <div className="flex justify-between items-center h-full">
            <h4 className="uppercase text-white">be in touch with us:</h4>
            <div className="form-group bg-white flex items-center rounded-md">
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="pt-1 pr-3 pb-px pl-4 w-96 h-10 rounded-tl-md rounded-bl-md"
              />
              <button className="uppercase bg-slate-900 p-4 px-5 rounded-tr-md rounded-br-md text-white">
                join us
              </button>
            </div>
            <div className="flex gap-4 text-white">
              <a href="!#" className="hover:text-black">
                <FaFacebookF />
              </a>
              <a href="!#" className="hover:text-black">
                <FaTwitter />
              </a>
              <a href="!#" className="hover:text-black">
                <FaGoogle />
              </a>
              <a href="!#" className="hover:text-black">
                <FaInstagram />
              </a>
              <a href="!#" className="hover:text-black">
                <FaPinterestP />
              </a>
            </div>
          </div>
        </Container>
      </div>
      {/* footer bottom */}
      <div className="bg-slate-200 mt-4 h-auto">
        <Container maxWidth="lg" className="h-auto">
          <Grid
            container
            spacing={2}
            columns={12}
            justifyContent="center"
            className="h-auto py-14"
          >
            {/* col 1 */}
            <Grid item lg={3}>
              <h4 className="font-medium leading-6 pb-4">CATEGORIES</h4>
              <ul className="text-slate-400">
                <li className="h-7">
                  <Link to={"/"}>Women</Link>
                </li>
                <li className="h-7">
                  <Link to={"/"}>Men</Link>
                </li>
                <li className="h-7">
                  <Link to={"/"}>Accessories</Link>
                </li>
                <li className="h-7">
                  <Link to={"/"}>Shoes</Link>
                </li>
                <li className="h-7">
                  <Link to={"/"}>New Arrivals</Link>
                </li>
                <li className="h-7">
                  <Link to={"/"}>Clearence</Link>
                </li>
              </ul>
            </Grid>
            {/* col 2 */}
            <Grid item lg={3}>
              <h4 className="font-medium leading-6 pb-4">BUY WITH US</h4>
              <ul className="text-slate-400">
                <li className="h-7">
                  <Link to={"/"}>About Us</Link>
                </li>
                <li className="h-7">
                  <Link to={"/"}>Services</Link>
                </li>
                <li className="h-7">
                  <Link to={"/"}>Contact Us</Link>
                </li>
                <li className="h-7">
                  <Link to={"/"}>FAQs</Link>
                </li>
                <li className="h-7">
                  <Link to={"/"}>Privacy Policy</Link>
                </li>
                <li className="h-7">
                  <Link to={"/"}>Cookie Policy</Link>
                </li>
                <li className="h-7">
                  <Link to={"/"}>Terms and Conditions</Link>
                </li>
              </ul>
            </Grid>
            {/* col 3 */}
            <Grid item lg={3}>
              <h4 className="font-medium leading-6 pb-4">ABOUT</h4>
              <div className="text-slate-400">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tempor incididunt.
              </div>
            </Grid>
            {/* col 4 */}
            <Grid item lg={3}>
              <h4 className="font-medium leading-6 pb-4">CONTACT US</h4>
              <div className="text-slate-400">
                <address>
                  <p>
                    <span className="text-black">ADDRESS:</span> 7895 Piermont
                    Dr NE Albuquerque, NM 198866, United States of America
                  </p>
                </address>
                <p>
                  <span className="text-black">PHONE:</span> +566 4774 9930;
                  +566 4774 9940
                </p>
                <p>
                  <span className="text-black">HOURS:</span> all week from 9 am
                  to 9 pm
                </p>
                <p>
                  <span className="text-black">E-MAIL:</span>{" "}
                  <a href="mailto:info@mydomain.com" className="text-blue-600">
                    info@mydomain.com
                  </a>
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
