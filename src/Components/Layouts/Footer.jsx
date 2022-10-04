import React from "react";
import { AiFillTwitterSquare } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

function Footer() {
  return (
    <div className="bg">
      <div className="container py-5">
        <div className="row">
          

          <div className="col ">
            <ul className="text-start list-unstyled">
              <li>
                <b>WHO WE SERVE</b>
              </li>
              <br />
              <li> Financial</li>
              <li> institutions</li>
              <li>Enterprises</li>
              <li>Partners Developers</li>
            </ul>
          </div>
          <div className="col">
            <ul className="text-start list-unstyled">
              <li>
                <b>WHAT WE DO</b>
              </li>{" "}
              <br />
              <li>Digital currencies</li>
              <li>Payments</li>
              <li>Supply chain and trade finance</li>
              <li>Capital markets</li>
              <li>Compliance</li>
              <li>Insurance</li>
            </ul>
          </div>
          <div className="col">
            <ul className="text-start list-unstyled">
              <li>
                <b>HOW WE DO IT</b>
              </li>
              <li>Products</li>
              <li>- Overledger Integrate</li>
              <li>- Overledger Tokenise</li>
              <li>Networks</li>
              <li>Ecosystem</li>
              <li>- Developer programme</li>
              <li>- Partners</li>
              <li>- Associations</li>
            </ul>
          </div>
          <div className="col">
            <ul className="text-start list-unstyled">
              <li>
                <b>WHY IT MATTERS</b>
              </li>
              <li>All</li>
              <li>News</li>
              <li>Events</li>
              <li>Perspectives</li>
              <li>Research</li>
              <li>Use cases</li>
            </ul>
          </div>
          <div className="col">
            <ul className="text-start list-unstyled">
              <li>
                <b>ABOUT US</b>
              </li>
              <li>Mission and values</li>
              <li>Leadership</li>
              <li>Careers</li>
              <li>Media centre</li>
              <li>Contact</li>
            </ul>
                
          </div>
          <hr />
          <div className="footer">
            <div>
              <img
                className="img-fluid  quantfooter"
                src="Assets/logo.png"
                width={"150px"}
                alt="quantnetwork"
                />
              <p>© 2022 Quant Network Limited. All rights reserved.</p>
            </div>
            <div className="policy mt-5">
              <a href="/" className="policy">
                <b>Privacy policy</b>
              </a>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <a href="/" className="policy">
                <b>Term of Use</b>
              </a>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <AiFillTwitterSquare size={"30px"} /> &nbsp; &nbsp;
              <ImLinkedin size={"25px"} /> &nbsp; &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
