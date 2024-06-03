import { BaseUrl } from "../constants";
const getUserProfileDetails = async () => {
  const _id = localStorage.getItem("userid");
  const result = await fetch(`${BaseUrl}/getuser/${_id}`);

  const response = await result.json();

  return response;
};

const EditUserProfileDetails = async ({ adminname, email, number }) => {
  const _id = localStorage.getItem("userid");

  const data = {
    adminname,
    email,
    phone: number,
    _id: _id,
  };
  console.log("Frontend api call ---->", data);
  const result = await fetch(`${BaseUrl}/edituser/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const response = await result.json();

  return response;
};

export { getUserProfileDetails, EditUserProfileDetails };
