import React from "react";

const StoreLogo = ({ image, isproductpage }) => {
  return (
    <div className={!isproductpage ? "StoreLogo" : "productImage"}>
      <img src={image} />
    </div>
  );
};

export default StoreLogo;
