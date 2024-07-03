import { BaseUrl } from "../constants";

const getOrder = async () => {
  const storeID = localStorage.getItem("userid");

  const data = { storeID };

  const result = await fetch(`${BaseUrl}/getorder`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await result.json();

  return response;
};

const getOrderProductList = async ({ _id }) => {
  const data = { _id };

  const result = await fetch(`${BaseUrl}/getorderedproduct`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await result.json();

  return response;
};

export { getOrder, getOrderProductList };
