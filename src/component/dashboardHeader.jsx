import React, { useEffect, useState } from "react";
import StoreLogo from "./storeLogo";
import { useSelector } from "react-redux";

const DashBoardHeader = () => {
  const [storelogo, setStoreLogo] = useState("");

  const storeinfoSelector = useSelector((store) => store?.store?.storedetails);

  useEffect(() => {
    storeinfoSelector?.logo?.url
      ? setStoreLogo(storeinfoSelector?.logo?.url)
      : setStoreLogo("");
  }, [storeinfoSelector]);
  return (
    <div className="DashBoardHeaderContainner">
      <p className="CurrentHeader">Dashboard</p>
      {storelogo ? (
        <StoreLogo image={storelogo} />
      ) : (
        <h4>{storeinfoSelector?.storename}</h4>
      )}
    </div>
  );
};

export default DashBoardHeader;
