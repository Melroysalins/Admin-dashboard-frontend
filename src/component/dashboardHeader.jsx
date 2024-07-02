import React, { useEffect, useState } from "react";
import StoreLogo from "./storeLogo";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { getCurrentStoreDetails } from "../api/store";
import { getCurrntStoreInfo } from "../store/storeSlice";

const DashBoardHeader = () => {
  const [storelogo, setStoreLogo] = useState("");
  const location = useLocation();
  const pathname = location.pathname;

  // Get the last segment after the last '/'
  const segments = pathname.split("/");
  const lastSegment = segments[segments.length - 1];

  let formattedName1 = segments[1];

  let formattedName =
    formattedName1.charAt(0).toUpperCase() + formattedName1.slice(1);

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
