import { BaseUrl } from "../constants";

const loginUser = async ({ email, password, number }) => {
  const data = { email, password, phone: number };

  const response = await fetch(`${BaseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};

export { loginUser };
