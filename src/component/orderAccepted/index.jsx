import React from "react";
import "./index.css";

const OrderAccepted = ({ status }) => {
  return (
    <div className="accepted">
      <h4>{status}</h4>
    </div>
  );
};

export default OrderAccepted;
