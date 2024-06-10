import React from "react";
import { useNavigate } from "react-router-dom";

const EditProducts = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="EditProductsContainner"
      style={{ background: data?.backgroundColor }}
      onClick={() => navigate(`${data?.navigate}`)}
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
