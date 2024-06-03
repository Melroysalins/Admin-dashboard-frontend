// src/OtpInput.js
import React, { useState, useRef } from "react";
import "./index.css";

const OtpInput = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input box
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (element, index, e) => {
    if (e.key === "Backspace" && !otp[index] && element.previousSibling) {
      element.previousSibling.focus();
    } else if (e.key === "ArrowLeft" && element.previousSibling) {
      element.previousSibling.focus();
    } else if (e.key === "ArrowRight" && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="otp-input">
      {otp.map((data, index) => (
        <input
          className="otp-field"
          type="text"
          name="otp"
          maxLength="1"
          key={index}
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e.target, index, e)}
          ref={(ref) => (inputRefs.current[index] = ref)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
