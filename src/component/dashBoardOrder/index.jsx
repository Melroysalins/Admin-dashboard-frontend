import React, { useState } from "react";
import "./index.css";
import CustomerPhoto from "../customerPhoto";
import CustomerAddress from "../customerAddress";
import OrderAccepted from "../orderAccepted";
import OrderModal from "../subProduct/orderModal";
import { getOrderProductList } from "../../api/getOrder";

const DashBoardOrder = ({ data, setOrder }) => {
  const [open1, setOpen1] = useState(false);
  const [productlist, setProductList] = useState();

  const handleShowOrderDetails = async () => {
    setOpen1(!open1);

    const result = await getOrderProductList({ _id: data?._id });
    if (result?.status === 200) {
      setProductList(result);
    }
  };

  return (
    <div className="DashBoardOrder" onClick={() => handleShowOrderDetails()}>
      <CustomerPhoto />
      <h4>{data?.userDetails?.[0]?.username}</h4>
      <CustomerAddress address={data?.userDetails?.[0]?.address?.[0]} />
      <OrderAccepted status={data?.orderStatus} />
      <h4>Order Details</h4>
      <OrderModal
        open1={open1}
        setOpen1={setOpen1}
        data={productlist}
        setProductList={setProductList}
        setOrder={setOrder}
      />
    </div>
  );
};

export default DashBoardOrder;
