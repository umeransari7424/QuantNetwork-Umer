import React from "react";

function Explore() {
  return (
    <div className="container text-center">
      <div>
        <h1 className="exp" data-aos="fade-up">Explore the future</h1> <br />
        <p className="exp-para">
          Much of the financial world’s digital future <br />
           will be built on
          blockchain. Find out why.
        </p>
      </div> <br />
      <div className="container ">
        <div className="guide py-5">
          <div className="card card-style guide-card" style={{maxwidth:"280px"}}>
            <div className="card-body text-start ">
              <span className="event"> News</span> <br />
              <span className="date">29 September 2011</span> <br /> <br />
              <p className="card-text ">
                <b>
                  Martin Hargreaves <br /> on the benefits of <br /> CBDCs for{" "}
                  <br /> consumers
                </b>
              </p>
              <span className="badge text-bg-danger">CBDC</span> &nbsp;
              <span className="badge text-bg-danger">CITYAM</span> &nbsp;
              <span className="badge text-bg-danger">ENTERPRISES</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container text-center mt-5">
          <div className="row">
            <div className="col">
              <div className="card card-style">
                <div className="card-body text-start ">
                  <span className="event"> News</span> <br />
                  <span className="date">29 September 2011</span> <br /> <br />
                  <p className="card-text ">
                    <b>
                      Martin Hargreaves <br /> on the benefits of <br /> CBDCs
                      for <br /> consumers
                    </b>{" "}
                  </p>
                  <span className="badge text-bg-danger">CBDC</span> &nbsp;
                  <span className="badge text-bg-danger">CITYAM</span> &nbsp;
                  <span className="badge text-bg-danger">ENTERPRISES</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-style">
                <div className="card-body text-start">
                  <span className="event"> News</span> <br />
                  <span className="date">15 September 2011</span> <br /> <br />
                  <p className="card-text text-start ">
                    <b>
                      Gilbert Verdian <br /> explains The Merge
                    </b>
                  </p>
                  <span className="badge text-bg-danger">BLOCKCHAIN</span>{" "}
                  &nbsp;
                  <span className="badge text-bg-danger">DEVELOPERS</span>{" "}
                  &nbsp;
                  <span className="badge text-bg-danger">ENTERPRISES</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-style">
                <div className="card-body text-start">
                  <span className="event"> Events</span> <br />
                  <span className="date">12 September 2011</span> <br /> <br />
                  <p>
                    <b>
                      The multi-chain <br /> future: sidechains, <br /> layer 2s
                      and The <br /> Merge
                    </b>
                  </p>
                  <span className="badge text-bg-danger">ARCHITECHTURE</span>{" "}
                  &nbsp;
                  <span className="badge text-bg-danger">
                    ASSOCIATIONS
                  </span>{" "}
                  &nbsp;
                  <span className="badge text-bg-danger">DEVELOPERS</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-style">
                <div className="card-body text-start">
                  <span className="event"> News</span> <br />
                  <span className="date">5 September 2011</span> <br /> <br />
                  <p>
                    <b>
                      Overledger 2.2.14 is <br /> an engineering <br /> release{" "}
                    </b>
                  </p>
                  <span className="badge text-bg-danger">DEVELOPERS</span>{" "}
                  &nbsp;
                  <span className="badge text-bg-danger">OVERLEDGER</span>{" "}
                  &nbsp;
                  <span className="badge text-bg-danger">PRODUCT RELEASE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
