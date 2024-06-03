import React from "react";
import "./index.css";
import LoginImageLayout from "../../component/loginImage";
import LoginLayout from "../../component/loginLayout";

const Loginpage = () => {
  return (
    <div className="LoginPage">
      <div className="MainLoginLayout">
        <LoginImageLayout />
        <LoginLayout />
      </div>
    </div>
  );
};

export default Loginpage;
