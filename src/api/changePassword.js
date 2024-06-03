import { BaseUrl } from "../constants";

const ChangeExistingPassword = async ({ password }) => {
  const _id = localStorage.getItem("userid");

  const data = {
    _id,
    password,
  };

  const response = await fetch(`${BaseUrl}/changepassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  return result;
};

export { ChangeExistingPassword };
