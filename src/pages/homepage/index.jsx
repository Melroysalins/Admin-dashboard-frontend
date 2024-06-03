import React from "react";
import "./index.css";
import SiderBar from "../../component/sideBar";
import DashBoardHeader from "../../component/dashboardHeader";
import StoreForm from "../../component/storeForm";
import { Outlet, Link } from "react-router-dom";

const Homepage = () => {
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
