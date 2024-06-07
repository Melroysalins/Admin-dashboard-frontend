import React from "react";

const ProductName = ({ name, data }) => {
  return (
    <div
      className="ProductName"
      onClick={() => console.log("productname", data?._id)}
    >
      <p>{name}</p>
    </div>
  );
};

export default ProductName;
