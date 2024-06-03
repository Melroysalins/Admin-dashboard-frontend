import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MenuList = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  console.log("path name", pathname);
  return (
    <div
      className={
        pathname === data?.navigate
          ? "MenuListComponent selected"
          : "MenuListComponent"
      }
      onClick={() => navigate(data?.navigate)}
    >
      <p>{data?.name}</p>
      <div className="icon"> {data?.icon}</div>
    </div>
  );
};

export default MenuList;
