import React from "react";
import "./CabinetFooter.css";
import { useLocation, useNavigate } from "react-router-dom";

const CabinetFooter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigation = () => {
    if (location.pathname === "/") {
      navigate("/parts-selection");
    } else if (location.pathname === "/parts-selection") {
      navigate("/assembly");
    } else if (location.pathname === "/assembly") {
      navigate("/final-product");
    } else {
      return;
    }
    console.log("location", location);
  };
  return (
    <div className="cabinet__footer__wrap">
      <button
        className="cabinet__footer-btn"
        onClick={(e) => handleNavigation()}
      >
        Next
      </button>
    </div>
  );
};

export default CabinetFooter;
