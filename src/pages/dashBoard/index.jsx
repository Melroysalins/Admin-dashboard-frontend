import React from "react";
import "./index.css";
import DashBoardInfoComponent from "../../component/dashboardInfo";
import { DashBoardFilter, EditDetails } from "../../constants";
import EditProducts from "../../component/editProducts";
import DashBoardOrder from "../../component/dashBoardOrder";

export const DashBoardPage = () => {
  return (
    <div className="DashBoardPage">
      <div className="DashBoardInfoBox">
        {DashBoardFilter?.map((list) => (
          <DashBoardInfoComponent key={list?.id} data={list} />
        ))}
      </div>
      <div className="StoreStaticContainner">
        {EditDetails?.map((list) => (
          <EditProducts key={list?.id} data={list} />
        ))}
      </div>
      <div className="DashBoardAllOrderContainner">
        <DashBoardOrder />
        <DashBoardOrder />
        <DashBoardOrder />
        <DashBoardOrder />
        <DashBoardOrder />
        <DashBoardOrder />
        <DashBoardOrder />
        <DashBoardOrder />
        <DashBoardOrder />
        <DashBoardOrder />
        <DashBoardOrder />
        <DashBoardOrder />
        <DashBoardOrder />
        <DashBoardOrder />
        <DashBoardOrder />
      </div>
    </div>
  );
};
