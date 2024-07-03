import React from "react";
import "./index.css";

const FoodQuantity = ({ quantity }) => {
  return (
    <div className="FoodQuantityContainner">
      <div className="Qty">
        <p>Qty :</p>
      </div>
      <div className="QtyNumber">
        <p>{quantity}</p>
      </div>
    </div>
  );
};

export default FoodQuantity;
