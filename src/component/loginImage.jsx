import React from "react";
import loginasset from "../asset/loginasset.jpg";

const LoginImageLayout = () => {
  return (
    <div className="LoginImageLayout">
      <img
        src={loginasset}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top center",
        }}
      />
    </div>
  );
};

export default LoginImageLayout;
