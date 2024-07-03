import React from "react";
import "./index.css";

const FoodImage = ({ data }) => {
  return (
    <div className="FoodImageandNameWrapper">
      <div className="FoodImage">
        <img src={data?.image?.url} />
      </div>
      <div className="FoodNameCont">
        <p>{data?.productname}</p>
      </div>
    </div>
  );
};

export default FoodImage;
