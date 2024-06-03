import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
const SiderBarHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        padding: "7px",
      }}
    >
      <p className="AdminHeadre">Admin</p>
      <MenuIcon sx={{ color: "#FF735C", cursor: "pointer" }} />
    </div>
  );
};

export default SiderBarHeader;
