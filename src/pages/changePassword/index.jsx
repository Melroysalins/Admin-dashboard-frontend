import React, { useState } from "react";
import "./index.css";
import CustomizedSnackbars from "../../component/snackBar";
import { PasswordValidation } from "../../utils/validattions";
import { useNavigate } from "react-router-dom";
import { ChangeExistingPassword } from "../../api/changePassword";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const navigate = useNavigate();

  const handleSavePassword = async () => {
    if (password !== confirmpassword) {
      setOpen(true);
      setMessage("Password & Confirm Password doesn't match");
      setSeverity("error");
    }
    const result = PasswordValidation(password);

    if (result.length) {
      setOpen(true);
      setMessage(result);
      setSeverity("error");
    }

    const passwordChanged = await ChangeExistingPassword({ password });

    console.log("password changed", passwordChanged);

    if (passwordChanged?.status === 200) {
      setOpen(true);
      setMessage("Password has been changes successfully");
      setSeverity("success");
      setTimeout(() => {
        navigate("/login");
      }, 600);
    }
  };

  return (
    <div className="PasswordChangePage">
      <div
        style={{
          width: "100%",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="PasswordChangeContainner">
          <div className="PasswordContainnerMessage">
            <p className="createNewPassword">Create New Password</p>
            <p className="subpasswordMessage">
              Please enter a new password.Ensure that your new password is
              different from previous one
            </p>
          </div>

          <div className="PasswordChangeForm">
            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter confirm password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="PasswordChangeButton">
            <button onClick={() => handleSavePassword()}>Save</button>
          </div>
          <CustomizedSnackbars
            open={open}
            setOpen={setOpen}
            message={message}
            severity={severity}
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
