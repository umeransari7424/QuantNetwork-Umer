import React from "react";

function Section1() {
  return (
    <div>
      <div className="container ">
        <div className="row mb-5">
          <div className="col-md-6 col-12 fluid images">
            <img className="img-fluid " src="Assets/download.svg"  alt="blocks" />
          </div>
          <div className="col-md-6 col-12 fluid text-start images">
            <div>

            <div  >
            <h1 className="blockchain" data-aos="fade-up">Unlocking the power of blockchain for everyone</h1>
            </div>
            <div>
                <p className="blockchainpara">We deliver interoperable ecosystems and real-world solutions that lower costs, enable new business, and mitigate risk.</p>
            </div>
            <div>
            <button type="button" className="btn "><b>Let's Talk</b></button>
            </div>
        </div>
          
            </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
