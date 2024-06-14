import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MenuList = ({ data, setUserLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const handleUserLogout = () => {
    console.log("clicked");
    localStorage.setItem("isloggin", false);
    // setUserLoggedIn(false);
  };

  const handleUserLogin = () => {
    navigate("/login");
  };

  return (
    <div
      className={
        pathname === data?.navigate
          ? "MenuListComponent selected"
          : "MenuListComponent"
      }
      onClick={() => {
        if (data === "Logout") {
          handleUserLogout();
        } else if (data === "Login") {
          handleUserLogin();
        } else {
          navigate(data?.navigate);
        }
      }}
    >
      <p>{data?.name || data}</p>
      <div className="icon"> {data?.icon}</div>
    </div>
  );
};

export default MenuList;
