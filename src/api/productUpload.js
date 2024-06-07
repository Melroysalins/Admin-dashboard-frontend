import { BaseUrl } from "../constants";

const ProductUpload = async ({
  storeID,
  categoryname,
  Pimage,
  price,
  quantity,
  description,
  productname,
}) => {
  const formData = new FormData();
  formData.append("categoryname", categoryname);
  formData.append("Pimage", Pimage);
  formData.append("price", price);
  formData.append("quantity", quantity);
  formData.append("description", description);
  formData.append("productname", productname);
  formData.append("storeID", storeID);

  const result = await fetch(`${BaseUrl}/uploadproduct`, {
    method: "POST",
    body: formData,
  });

  const response = await result.json();

  return response;
};

export { ProductUpload };
