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
  formData.append("OfferBanner", OfferBanner);

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

export { registerStore, getCurrentStoreDetails };
