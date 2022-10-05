import React from "react";
import HeroVideo from "../../Media/Quant Network.mp4";

function Hero() {
  return (
  
    <div className="container-fluid text-center ">
      

        
      <div className="row ">
        <div className="col-md-6 col-12 fluid text-center images p-5">
            <div className="container text-start payment">
                
            
            <div data-aos="fade-up">
                <p className="hero">  The future 
                    of <br /> finance. <br />
                    <span className="text-start today">Today.</span> </p>
                
            </div><br />
            <div>
            <button type="button" className="btn  ">
                <b className="m-3 ">Get Started</b>
              </button>
            </div>
        </div>
        </div>
        <div className="col-md-6 col-12 fluid images">
            <div className="video">
                    <video className="vid" width={"100%"} height={"auto"}  src={HeroVideo} autoPlay loop muted></video>
              
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
