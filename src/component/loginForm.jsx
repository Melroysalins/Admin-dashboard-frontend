import React, { useState } from "react";
import { loginValidation } from "../utils/validattions";
import { registerUser } from "../api/register";
import { useDispatch } from "react-redux";
import { adduserInfo } from "../store/loginSlice";
import { loginUser } from "../api/login";
import { useNavigate } from "react-router-dom";
import CustomizedSnackbars from "./snackBar";

const LoginForm = ({ setIsRegisteredPage, isregisteredpage }) => {
  const [adminname, setAdminname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async () => {
    const response = loginValidation(email, password, number);

    response ? setError(response) : setError("");

    let timer;

    if (isregisteredpage) {
      const registerResult = await registerUser({
        adminname,
        email,
        password,
        number,
      });

      if (registerResult?.status === 200) {
        // dispatch(adduserInfo(registerResult?.admininfo));
        navigate("/login");
      } else {
        setSeverity("error");
        setOpen(true);
        setMessage(registerResult?.message);
      }
    } else {
      const loginResult = await loginUser({
        email,
        password,
        number,
      });

      console.log("login result", loginResult);

      if (loginResult.status === 200) {
        dispatch(adduserInfo(loginResult?.loggedAdmin));
        setSeverity("success");
        setOpen(true);
        setMessage(loginResult?.message);
        localStorage.setItem("accesstoken", loginResult?.accesstoken);
        localStorage.setItem("refreshtoken", loginResult?.refreshtoken);
        localStorage.setItem("userid", loginResult?.loggedAdmin?._id);
        localStorage.setItem("isloggin", true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setSeverity("error");
        setOpen(true);
        setMessage(loginResult?.message);
      }
    }
  };

  return (
    <div className="LoginFormContainner">
      {isregisteredpage && (
        <input
          type="text"
          placeholder="Enter name"
          value={adminname}
          onChange={(e) => setAdminname(e.target.value)}
        />
      )}
      <input
        type="email"
        placeholder="example@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter phone number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      {!isregisteredpage && (
        <p
          style={{
            opacity: "0.5",
            cursor: "pointer",
            fontFamily: "Poppins",
            fontWeight: "600",
          }}
          onClick={() => navigate("/updatepassword")}
        >
          forgot password ?
        </p>
      )}
      <p
        style={{
          fontFamily: "poppins",
          fontWeight: "600",
          color: "red",
          fontSize: "12px",
        }}
      >
        {error}
      </p>

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: "-14px",
        }}
      >
        <button className="LoginBtn" onClick={() => handleRegister()}>
          {isregisteredpage ? "Register" : "Login"}
        </button>
      </div>

      <div className="registermessage">
        {isregisteredpage ? (
          <p style={{ opacity: "0.5" }} onClick={() => navigate("/login")}>
            Already have an account ?
          </p>
        ) : (
          <p style={{ opacity: "0.5" }} onClick={() => navigate("/register")}>
            Don't have an account ?
          </p>
        )}

        {isregisteredpage ? (
          <p className="message" onClick={() => navigate("/login")}>
            Login
          </p>
        ) : (
          <p className="message" onClick={() => navigate("/register")}>
            Register
          </p>
        )}
      </div>
      <CustomizedSnackbars
        open={open}
        setOpen={setOpen}
        message={message}
        severity={severity}
      />
    </div>
  );
};

export default LoginForm;
