import React from "react";

import "./price.css";

const Price = ({title,price, description,color}) => {
  return (
    <div className="price-container">
      <div className={`price-title ${color}`}>
       {title}
      </div>
      <h3 className="price-price">{price}</h3>
      <p className="price-desc">{description}</p>
      <button className={`price-btn ${color}`}>Subscribe</button>
    </div>
  );
};

export default Price;
