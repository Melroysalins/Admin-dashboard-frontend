import React from "react";
import { useNavigate } from "react-router-dom";

const EditProducts = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="EditProductsContainner"
      onClick={() => navigate(`${data?.navigate}`)}
    >
      <div className="IconRowContainner" style={{ color: "black" }}>
        {data?.icon}
      </div>
      <div className="EditnameContainner">
        <p>{data?.name}</p>
      </div>
    </div>
  );
};

export default EditProducts;
