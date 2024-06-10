import React from "react";
import "./index.css";

const DashBoardInfoComponent = ({ data }) => {
  return (
    <div className="DashBoardInfoContainner">
      <h6>{data?.name}</h6>
    </div>
  );
};

export default DashBoardInfoComponent;
