import React from "react";
import { FiSearch } from "react-icons/fi";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg ">
    <div className="container">
      <img src="Assets/logo.png" width={"110px"} alt="Quant Network" />
      {/* <a className="navbar-brand" href="/">

      </a> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Who</a>
          </li> &nbsp; &nbsp; &nbsp;
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">What</a>
          </li>&nbsp; &nbsp;&nbsp;
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">How</a>
          </li> &nbsp; &nbsp;&nbsp;
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Why</a>
          </li>&nbsp; &nbsp;&nbsp;
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">About</a>
          </li> &nbsp; &nbsp;&nbsp;
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Sign In</a>
          </li> &nbsp; &nbsp;&nbsp;
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/"><FiSearch/></a>
          </li> &nbsp; &nbsp;&nbsp;

        </ul>
        
      </div>
    </div>
  </nav>
  );
}

export default Header;
