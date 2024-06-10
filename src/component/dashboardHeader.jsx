import React, { useEffect, useState } from "react";
import StoreLogo from "./storeLogo";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

const DashBoardHeader = () => {
  const [storelogo, setStoreLogo] = useState("");
  const location = useLocation();
  const pathname = location.pathname;
  const pathNameWithoutSlash = pathname.substring(
    pathname.lastIndexOf("/") + 1
  );

  // Converting the first letter to uppercase
  const formattedName =
    pathNameWithoutSlash.charAt(0).toUpperCase() +
    pathNameWithoutSlash.slice(1);

  const storeinfoSelector = useSelector((store) => store?.store?.storedetails);

  useEffect(() => {
    storeinfoSelector?.logo?.url
      ? setStoreLogo(storeinfoSelector?.logo?.url)
      : setStoreLogo("");
  }, [storeinfoSelector]);
  return (
    <div className="DashBoardHeaderContainner">
      <p className="CurrentHeader">{formattedName}</p>
      {storelogo ? (
        <StoreLogo image={storelogo} />
      ) : (
        <h4>{storeinfoSelector?.storename}</h4>
      )}
    </div>
  );
};

export default DashBoardHeader;
