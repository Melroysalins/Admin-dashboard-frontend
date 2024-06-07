import React from "react";

const EditProducts = ({ data }) => {
  console.log("The data--->", data);
  return (
    <div
      className="EditProductsContainner"
      style={{ background: data?.backgroundColor }}
    >
      <div className="IconRowContainner" style={{ color: data?.iconcolor }}>
        {data?.icon}
      </div>
      <div className="EditnameContainner">
        <p style={{ color: data?.iconcolor }}>{data?.name}</p>
      </div>
    </div>
  );
};

export default EditProducts;
