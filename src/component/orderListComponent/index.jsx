import React from "react";
import "./index.css";
import FoodImage from "../foodImage";
import FoodQuantity from "../foodQuantity";
import FoodPrice from "../foodPrice";

const OrderListComponent = ({ info }) => {
  return (
    <div className="OrderListComponent">
      <FoodImage data={info} />
      <FoodQuantity quantity={info?.quantity} />
      <FoodPrice price={info?.price} />
    </div>
  );
};

export default OrderListComponent;
