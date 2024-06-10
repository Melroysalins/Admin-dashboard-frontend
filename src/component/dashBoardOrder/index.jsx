import React from "react";
import "./index.css";
import CustomerPhoto from "../customerPhoto";
import CustomerAddress from "../customerAddress";
import OrderAccepted from "../orderAccepted";

const DashBoardOrder = () => {
  return (
    <div className="DashBoardOrder">
      <CustomerPhoto />
      <h4>Melroy salins</h4>
      <CustomerAddress />
      <OrderAccepted />
      <h4>Order Details</h4>
    </div>
  );
};

export default DashBoardOrder;
