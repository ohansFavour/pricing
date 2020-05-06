import React from "react";
import Logo from "../../images/logo.PNG";

import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img src={Logo} alt="company-logo" />
      <div>
        <span className="header-content">Pricing</span>
        <span className="header-content">Product</span>
        <span className="header-content special">Contact</span>
      </div>
    </div>
  );
};

export default Header;
