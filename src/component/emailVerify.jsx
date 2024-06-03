import React from "react";
import emailicon from "../asset/emailicon.svg";

const EmailVerify = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <img
        src={emailicon}
        alt=""
        style={{ width: "140px", height: "100%", cursor: "pointer" }}
      />
    </div>
  );
};

export default EmailVerify;
