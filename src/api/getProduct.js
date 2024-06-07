import { BaseUrl } from "../constants";

const getCurrentProductInfo = async ({ _id }) => {
  const storeID = localStorage.getItem("userid");

  const result = await fetch(`${BaseUrl}/getparticularproduct`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ storeID: storeID, _id: _id }),
  });

  const response = await result.json();

  return response;
};

export { getCurrentProductInfo };
