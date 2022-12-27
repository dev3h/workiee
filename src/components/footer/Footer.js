import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";

export default function Footer() {
  return (
    <div className="footer bg-whiteD8">
      {/* footer bottom */}
      <div className="h-auto mt-4 sm:text-center md:text-center lg:text-left">
        <Container className="h-auto">
          <Grid
            container
            spacing={2}
            columns={12}
            justifyContent="center"
            className="h-auto py-14"
          >
            {/* col 1 */}
            <Grid item sm={6} md={6} lg={3}>
              <h4 className="pb-4 font-medium leading-6">CATEGORIES</h4>
              <ul className="text-grey888">
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
            <Grid item sm={6} md={6} lg={3}>
              <h4 className="pb-4 font-medium leading-6 ">BUY WITH US</h4>
              <ul className="text-grey888">
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
            <Grid item sm={6} md={6} lg={3}>
              <h4 className="pb-4 font-medium leading-6 ">ABOUT</h4>
              <div className="text-grey888">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                tempor incididunt.
              </div>
            </Grid>
            {/* col 4 */}
            <Grid item sm={6} md={6} lg={3}>
              <h4 className="pb-4 font-medium leading-6 ">CONTACT US</h4>
              <div className="text-grey888">
                <address>
                  <p>
                    <span>ADDRESS:</span> 7895 Piermont Dr NE Albuquerque, NM 198866,
                    United States of America
                  </p>
                </address>
                <p>
                  <span>PHONE:</span> +566 4774 9930; +566 4774 9940
                </p>
                <p>
                  <span>HOURS:</span> all week from 9 am to 9 pm
                </p>
                <p>
                  <span>E-MAIL:</span>
                  <a href="mailto:info@mydomain.com" className="text-pri">
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
