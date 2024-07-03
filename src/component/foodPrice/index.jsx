import React from "react";
import "./index.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const FoodPrice = ({ price }) => {
  return (
    <div className="FoodPriceContainner">
      <CurrencyRupeeIcon sx={{ fontSize: "13px" }} />
      <p>{price}</p>
    </div>
  );
};

export default FoodPrice;
