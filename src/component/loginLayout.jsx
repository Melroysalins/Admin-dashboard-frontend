import React, { useState } from "react";
import LoginForm from "./loginForm";

const LoginLayout = ({ setIsRegisteredPage, isregisteredpage }) => {
  return (
    <div className="LoginLayout">
      <div className="loginandregistercontainner">
        <div className="loginheadingContainner">
          <p style={{ cursor: "pointer" }}>
            {isregisteredpage ? "Register" : "Login"}
          </p>
        </div>
      </div>
      <div className="FormDiv">
        <LoginForm
          setIsRegisteredPage={setIsRegisteredPage}
          isregisteredpage={isregisteredpage}
        />
      </div>
    </div>
  );
};

export default LoginLayout;
