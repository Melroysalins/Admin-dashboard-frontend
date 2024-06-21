import { BaseUrl } from "../constants";

const registerStore = async ({
  storename,
  deliveryTime,
  openTime,
  closeTime,
  address,
  offer,
  file,
  storeID,
  logo,
  OfferBanner,
  restauranttype,
  cuisine,
}) => {
  const serializedAddress = JSON.stringify(address);
  const formData = new FormData();
  formData.append("storename", storename);
  formData.append("deliveryTime", deliveryTime);
  formData.append("openTime", openTime);
  formData.append("closeTime", closeTime);
  formData.append("address", serializedAddress);
  formData.append("offer", offer);
  formData.append("file", file);
  formData.append("logo", logo);
  formData.append("storeID", storeID);
  formData.append("restauranttype", restauranttype);
  formData.append("cuisine", cuisine);

  const result = await fetch(`${BaseUrl}/store`, {
    method: "POST",
    body: formData,
  });
  const response = await result.json();

  return response;
};

const getCurrentStoreDetails = async () => {
  const storeID = localStorage.getItem("userid");

  const result = await fetch(`${BaseUrl}/getstore/${storeID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await result.json();

  return response;
};

const StoreLive = async () => {
  const storeID = localStorage.getItem("userid");

  const result = await fetch(`${BaseUrl}/storelive`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ storeID: storeID }),
  });

  const response = await result.json();

  return response;
};

const setStoreOffline = async () => {
  const storeID = localStorage.getItem("userid");

  const result = await fetch(`${BaseUrl}/offline`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ storeID: storeID }),
  });

  const response = await result.json();

  return response;
};

export { registerStore, getCurrentStoreDetails, StoreLive, setStoreOffline };
