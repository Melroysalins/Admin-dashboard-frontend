import React, { useEffect } from "react";
import "./index.css";
import SiderBar from "../../component/sideBar";
import DashBoardHeader from "../../component/dashboardHeader";
import StoreForm from "../../component/storeForm";
import { Outlet, Link } from "react-router-dom";
import { getCurrentStoreDetails } from "../../api/store";
import { useDispatch } from "react-redux";
import { getCurrntStoreInfo } from "../../store/storeSlice";

const Homepage = () => {
  const dispatch = useDispatch();
  const FetchStoreDetails = async () => {
    const resultData = await getCurrentStoreDetails();

    if (resultData?.status === 200) {
      dispatch(getCurrntStoreInfo(resultData?.checkStoreExist));
    }
  };

  useEffect(() => {
    FetchStoreDetails();
  }, []);

  return (
    <div className="HomepageContainner">
      <div className="HomepageLayout1">
        <SiderBar />
      </div>
      <div className="HomepageLayout2">
        <DashBoardHeader />
        <Outlet />
        {/* <StoreForm /> */}
      </div>
    </div>
  );
};

export default Homepage;
