import { BaseUrl } from "../constants";

const updateStore = async ({
  address,
  openTime,
  closeTime,
  offer,
  storename,
  file,
  logo,
  deliveryTime,
  restauranttype,
  cuisine,
}) => {
  const formData = new FormData();
  const storeID = localStorage.getItem("userid");
  formData.append("storename", storename);
  formData.append("deliveryTime", deliveryTime);
  formData.append("openTime", openTime);
  formData.append("closeTime", closeTime);
  formData.append("address", address);
  formData.append("offer", offer);
  formData.append("file", file);
  formData.append("logo", logo);
  formData.append("storeID", storeID);
  formData.append("restauranttype", restauranttype);
  formData.append("cuisine", cuisine);

  const result = await fetch(`${BaseUrl}/updatestore`, {
    method: "POST",
    body: formData,
  });
  const response = await result.json();

  return response;
};

export { updateStore };
