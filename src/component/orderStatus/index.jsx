import React, { useState } from "react";
import "./index.css";
import { changeOrderStatus } from "../../api/changeOrderStatus";
import CustomizedSnackbars from "../snackBar";
import { getOrder, getOrderProductList } from "../../api/getOrder";

const OrderStatusComponent = ({ setOpen1, open1, data, setOrder }) => {
  const handleAcceptOrder = async () => {
    const result = await changeOrderStatus({ _id: data?.[0]?._id, message: 1 });
    if (result?.status === 200) {
      setOpen1(!open1);
      const result = await getOrder();
      setOrder(result);
    }
  };

  const handleDeliverOrder = async () => {
    const result = await changeOrderStatus({
      _id: data?.[0]?._id,
      message: 0,
    });
    if (result?.status === 200) {
      setOpen1(!open1);

      const result = await getOrder();
      setOrder(result);
    }
  };

  const rejectOrder = async () => {
    const result = await changeOrderStatus({
      _id: data?.[0]?._id,
      message: -1,
    });
    if (result?.status === 200) {
      setOpen1(!open1);

      const result = await getOrder();
      setOrder(result);
    }
  };

  return (
    <div className="OrderStatusComponentContainner">
      <button className="AcceptOrder" onClick={() => handleAcceptOrder()}>
        Accept
      </button>
      <button className="DeliveredOrder" onClick={() => handleDeliverOrder()}>
        Delivered
      </button>
      <button className="RejectOrder" onClick={() => rejectOrder()}>
        Reject
      </button>
    </div>
  );
};

export default OrderStatusComponent;
