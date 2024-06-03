import React from "react";
import "./index.css";
import EmailVerify from "../../component/emailVerify";
import OtpInput from "../../component/otpInput";

const VerifyPage = () => {
  return (
    <div className="VerifiedPage">
      <div className="VerifiedContainner">
        <EmailVerify />
        <div
          style={{
            display: "flex",
            gap: "6px",
            justifyContent: "center",
            cursor: "pointer",
            marginTop: "9px",
            alignItems: "center",
          }}
        >
          <p className="MainOTP">OTP</p>
          <p className="restoftheText">
            has been sent to your registered email address
          </p>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <OtpInput />

          <button className="VerifyButton">Verify</button>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
