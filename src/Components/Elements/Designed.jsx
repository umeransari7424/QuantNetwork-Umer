import React from "react";

function Section10() {
  return (
    <div>
      <div className="container ">
        <div className="row ">
          <div className="col-md-6 col-12 fluid text-start future images">
            <div>

            <div data-aos="fade-up">
              <h1 className="blockchain"  >Designed for the future</h1>
            </div>
            <div >
              <p className="blockchainpara" >
              With our blockchain-agnostic approach, your existing infrastructure investments are protected. And the door is open to future cross-platform applications.
              </p>
            </div>
            <div >
              <button type="button" className="btn ">
                <b>Find out more</b>
              </button>
            </div>
            </div>
          </div>
          <div className="col-md-6 col-12 fluid images">
            <div>
              <img className="img-fluid" src="Assets/download (4).svg"  alt="blocks" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section10;
