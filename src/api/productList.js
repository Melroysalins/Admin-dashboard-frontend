import { BaseUrl } from "../constants";

const ProductListAPI = async () => {
  const storeID = localStorage.getItem("userid");
  console.log("getproduct api called");
  const result = await fetch(`${BaseUrl}/getproducts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ storeID: storeID }),
  });

  const response = await result.json();

  return response;
};

export { ProductListAPI };
