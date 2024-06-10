import { BaseUrl } from "../constants";
const getUserProfileDetails = async () => {
  const _id = localStorage.getItem("userid");
  const result = await fetch(`${BaseUrl}/getuser/${_id}`);

  const response = await result.json();

  return response;
};

const EditUserProfileDetails = async ({ adminname, email, number, Pimage }) => {
  const _id = localStorage.getItem("userid");

  const formData = new FormData();
  formData.append("adminname", adminname);
  formData.append("email", email);
  formData.append("phone", number);
  formData.append("_id", _id);
  formData.append("Pimage", Pimage);

  const result = await fetch(`${BaseUrl}/edituser/profile`, {
    method: "POST",
    body: formData,
  });
  const response = await result.json();

  return response;
};

export { getUserProfileDetails, EditUserProfileDetails };
