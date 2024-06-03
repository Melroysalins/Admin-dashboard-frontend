import { useDispatch } from "react-redux";
import { BaseUrl } from "../constants";
import { adduserInfo } from "../store/loginSlice";

const registerUser = async ({ adminname, email, password, number }) => {
  console.log("register user api called");
  const data = {
    adminname,
    email,
    password,
    phone: number,
  };

  const response = await fetch("http://localhost:4000/api/admin/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  return result;
};

export { registerUser };
