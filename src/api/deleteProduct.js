import { BaseUrl } from "../constants";

const deleteParticularProduct = async ({ storeID, _id }) => {
  const data = {
    storeID,
    _id,
  };

  const result = await fetch(`${BaseUrl}/deleteproduct`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await result.json();

  return response;
};

export { deleteParticularProduct };
