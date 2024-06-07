import { BaseUrl } from "../constants";

const UpdateProductDetails = async ({
  _id,
  productname,
  description,
  Pimage,
  price,
  quantity,
  available,
}) => {
  const storeID = localStorage.getItem("userid");

  const formData = new FormData();
  formData.append("productname", productname);
  formData.append("Pimage", Pimage);
  formData.append("price", price);
  formData.append("quantity", quantity);
  formData.append("description", description);
  formData.append("quantity", quantity);
  formData.append("storeID", storeID);
  formData.append("_id", _id);
  formData.append("available", available);

  const result = await fetch(`${BaseUrl}/updateproduct`, {
    method: "POST",
    body: formData,
  });

  const response = await result.json();

  return response;
};

export { UpdateProductDetails };
