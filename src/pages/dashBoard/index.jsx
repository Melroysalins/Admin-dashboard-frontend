import React, { useEffect, useState } from "react";
import "./index.css";
import DashBoardInfoComponent from "../../component/dashboardInfo";
import { DashBoardFilter, EditDetails } from "../../constants";
import EditProducts from "../../component/editProducts";
import DashBoardOrder from "../../component/dashBoardOrder";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { StoreLive, setStoreOffline } from "../../api/store";
import CustomizedSnackbars from "../../component/snackBar";
import { getCurrntStoreInfo } from "../../store/storeSlice";
import { getOrder } from "../../api/getOrder";

export const DashBoardPage = () => {
  const [open, setOpen] = useState(false);
  const [orders, setOrder] = useState();
  const [selectedfilter, setSelectedFilter] = useState("All Order");
  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState("");
  const selector = useSelector(
    (store) => store?.store?.storedetails?.availability?.open
  );
  const dispatch = useDispatch();

  const handleStoreLive = async () => {
    const result = await StoreLive();
    if (result?.status === 200) {
      setOpen(true);
      setMessage(result?.message);
      dispatch(getCurrntStoreInfo(result?.store));
    } else {
      setOpen(true);
      setMessage(result?.message);
      setSeverity("error");
    }
  };

  const handleStoreOffline = async () => {
    const result = await setStoreOffline();
    if (result?.status === 200) {
      setOpen(true);
      setMessage(result?.message);
      dispatch(getCurrntStoreInfo(result?.store));
    } else {
      setOpen(true);
      setMessage(result?.message);
      setSeverity("error");
    }
  };

  const FetchOrder = async () => {
    const result = await getOrder();
    setOrder(result);
  };

  useEffect(() => {
    FetchOrder();
  }, []);

  return (
    <div className="DashBoardPage">
      <div className="DashBoardInfoBox">
        {DashBoardFilter?.map((list) => (
          <DashBoardInfoComponent
            key={list?.id}
            data={list}
            selectedfilter={selectedfilter}
            setSelectedFilter={setSelectedFilter}
            setOrder={setOrder}
          />
        ))}
      </div>
      <div className="GoLiveContainner">
        <Button
          variant="contained"
          color={selector ? "success" : "error"}
          onClick={() => {
            selector ? handleStoreOffline() : handleStoreLive();
          }}
        >
          {selector ? "You're Live Now" : "You're Now Offline"}
        </Button>
      </div>
      <div className="StoreStaticContainner">
        {EditDetails?.map((list) => (
          <EditProducts key={list?.id} data={list} />
        ))}
      </div>
      <div className="DashBoardAllOrderContainner">
        {!orders?.orderDetails?.length && (
          <div className="NoOrderFound">
            <h4>No Orders Found</h4>
          </div>
        )}
        {orders &&
          orders?.orderDetails?.map((list) => (
            <DashBoardOrder key={list?._id} data={list} setOrder={setOrder} />
          ))}
      </div>
      <CustomizedSnackbars
        open={open}
        setOpen={setOpen}
        message={message}
        severity={severity}
      />
    </div>
  );
};
