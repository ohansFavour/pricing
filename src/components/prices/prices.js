import React from "react";
import Price from "../price/price";

import "./prices.css";

const Prices = () => {
  return (
    <div className="prices-container">
      <Price
        title="Bronze"
        price="$75"
        color= "bronze"
        description=" The bronze plan gives you access to a number of great features including free hosting"
      />
      <Price
        title="Gold"
        price="$120"
        color= "gold"
        description=" The gold plan gives you access to a number of great features including free hosting"
      />
      <Price
        title="Silver"
        price="$90"
        color="silver"
        description=" The silver plan gives you access to a number of great features including free hosting"
      />
    </div>
  );
};

export default Prices;
