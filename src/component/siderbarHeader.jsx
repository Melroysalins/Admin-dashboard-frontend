import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
const SiderBarHeader = ({ showmenulist, setShowMenuList }) => {
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
      <MenuIcon
        sx={{ color: "#dbd6d6", cursor: "pointer" }}
        onClick={() => setShowMenuList(!showmenulist)}
      />
    </div>
  );
};

export default SiderBarHeader;
