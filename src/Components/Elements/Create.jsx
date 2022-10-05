import React from "react";

function Create() {
  return (
    <div class="container-fluid text-center">
      <div class="row ">
      
           <p className="heading">Create value, reduce  costs, mitigate risk</p>
         
        <div class="col-md-4 text-start ">
          <div className="card m-5 create-card" style={{ maxwidth: "200px" }}>
            <div className="card-body ">
              <h5 className="card-title"><b>Capital Market</b></h5>
              <p className="card-text ">
                Assets of all kinds – both physical  and digital –  are being
                tokenised. Issuers are gaining access to  entire new pools of
                liquidity, while investors are diversifying their portfolios in
                ways they could only dream of just a few years ago
              </p>
            </div>
          </div>

          <div className="card create-card m-5" style={{ maxwidth: "200px" }}>
            <div className="card-body text-start">
              <h5 className="card-title"><b>Payments</b></h5>
              <p className="card-text">
                Cross-border payments – whether <br /> in digital currencies or fiat <br />
                currency – are more flexible and secure when handled over
                blockchain.
              </p>
            </div>
          </div>

          <div className="card create-card m-5" style={{ maxwidth: "200px" }}>
            <div className="card-body text-start">
              <h5 className="card-title"><b>Digital currencies</b></h5>
              <p className="card-text">
                Central banks across the world are investigating the adoption of  <br /> 
                digitalcurrencies, while <br /> commercial entities are issuing <br /> their
                own stablecoins – often to <br /> great acclaim.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 create-pic">
          
            <img
              className="img-fluid" 
              src="Assets/qnetwork.jpg"
              alt="q_networl"
            />
        </div>
        <div class="col-md-4">
          <div className="card create-card m-4" style={{ maxwidth: "200px" }}>
            <div className="card-body text-start">
              <h5 className="card-title"><b>Compliance</b></h5>
              <p className="card-text">
              Blockchain can make the analysis of transaction patterns easier for tax authorities, regulatory bodies and other responsible institutions. It can be used to simplify self-declarations, enforcement, or anti money laundering operations.
              </p>
            </div>
          </div>

          <div className="card create-card m-4" style={{ maxwidth: "200px" }}>
            <div className="card-body text-start">
              <h5 className="card-title"><b>Supply chain and trade finance</b></h5>
              <div className=" card-paragrapgh">
                
              <p className="card-text ">
              Blockchains are bringing clarity and certainty to areas such as procurement, logistics, provenance, customs and payments – helping to make notoriously complex global supply chains much more efficient.
              </p>
            </div>
              </div>
          </div>

          <div className="card create-card m-4" style={{ maxwidth: "200px" }}>
            <div className="card-body text-start">
              <h5 className="card-title">Insurance</h5>
              <p className="card-text">
              By removing intermediaries, blockchain could completely transform the insurance industry with a wide range of use cases, from the optimisation of existing processes to the introduction of new business models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="container-fluid text-center create-values">
    //   <div className="row">
    //     

    //     <div className="col">

    //
    //     </div>

    //     <div>
    //          <div className="col">

    //     </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Create;
