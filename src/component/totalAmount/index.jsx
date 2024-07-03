import React from "react";
import "./index.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const TotalAmount = ({ total }) => {
  return (
    <div className="TotalAmountContainner">
      <p className="totalamt">TotalAmount</p>
      <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
        <CurrencyRupeeIcon sx={{ fontSize: "16px" }} />
        <p className="tAmount">{total}</p>
      </div>
    </div>
  );
};

export default TotalAmount;
