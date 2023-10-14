import React from "react";
import CompleteCabinet from "./CompleteCabinet/CompleteCabinet";
import "./CabinetHomePage.css";
import CabinetFooter from "../CabinetFooter/CabinetFooter";

const CabinetHomePage = () => {
  return (
    <div className="cabinet__home__page">
    <div className="cabinet__home__page-content">
      <div className="home__page__description-wrap">
        <h1 className="heading">Cabinet Assembler App</h1>
        <p className="sub-text"></p>
      </div>
      <CompleteCabinet />
      </div>
      <CabinetFooter />
    </div>
  );
};

export default CabinetHomePage;
