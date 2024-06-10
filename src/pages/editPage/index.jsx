import React from "react";
import "./index.css";
import EditProducts from "../../component/editProducts";
import { EditDetails } from "../../constants";
import { Outlet } from "react-router-dom";

const EditPage = () => {
  return (
    <div className="EditPage">
      <div className="EditOptionsDiv">
        {EditDetails?.map((list) => (
          <EditProducts key={list?.id} data={list} />
        ))}
      </div>
      <div className="EditFormContainner">
        <Outlet />
      </div>
    </div>
  );
};

export default EditPage;
