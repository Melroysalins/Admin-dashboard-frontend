import { BaseUrl } from "../constants";

const changeOrderStatus = async ({ _id, message }) => {
  const data = { _id, message };

  const result = await fetch(`${BaseUrl}/changestatus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await result.json();

  return response;
};

const orderlistFilter = async ({ storeID, message }) => {
  const data = {
    storeID,
    message,
  };

  const result = await fetch(`${BaseUrl}/orderfilter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await result.json();

  return response;
};

export { changeOrderStatus, orderlistFilter };
