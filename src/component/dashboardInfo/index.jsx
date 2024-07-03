import React, { useState } from "react";
import "./index.css";
import { orderlistFilter } from "../../api/changeOrderStatus";
import { getOrder } from "../../api/getOrder";

const DashBoardInfoComponent = ({
  data,
  selectedfilter,
  setSelectedFilter,
  setOrder,
}) => {
  const handleSelectedFilter = async () => {
    setSelectedFilter(data?.name);

    const storeID = localStorage.getItem("userid");

    if (data?.name === "New Order") {
      const result = await orderlistFilter({ storeID, message: -1 });

      if (result?.status === 200) {
        setOrder(result);
      }
    } else if (data?.name === "Order Delivered") {
      const result = await orderlistFilter({ storeID, message: 0 });

      if (result?.status === 200) {
        setOrder(result);
      }
    } else if (data?.name === "Accepted Order") {
      const result = await orderlistFilter({ storeID, message: 1 });

      if (result?.status === 200) {
        setOrder(result);
      }
    } else {
      const result = await getOrder();
      setOrder(result);
    }
  };

  return (
    <div
      className={
        selectedfilter === data?.name
          ? "selectedButton"
          : "DashBoardInfoContainner"
      }
      onClick={() => handleSelectedFilter()}
    >
      <h6>{data?.name}</h6>
    </div>
  );
};

export default DashBoardInfoComponent;
