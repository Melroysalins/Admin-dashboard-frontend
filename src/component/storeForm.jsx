import React, { useEffect, useState } from "react";
import { getCurrentStoreDetails, registerStore } from "../api/store";
import CustomizedSnackbars from "./snackBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCurrntStoreInfo } from "../store/storeSlice";
import DisplayStoreLogo from "./displayStoreLogo";
import { getStoreAddress } from "../api/getStoreAddress";
import { validateStoreInfo } from "../utils/validateStoreInfo";

const StoreForm = () => {
  const [storename, setStoreName] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [file, setFile] = useState("");
  const [logo, setLogo] = useState("");
  const [offerbanner, setOfferBanner] = useState("");
  const [address, setAddress] = useState("");
  const [offer, setOffer] = useState("");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const storeID = localStorage.getItem("userid");
  const [editclicked, setEditClicked] = useState(false);
  const [disabled, setDisabled] = useState();
  const dispatch = useDispatch();

  const handleGetStoreAddress = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const result = await getStoreAddress({
              latitude,
              longitude,
            });
            if (result?.status?.code === 200) {
              const { village, state_district, state } =
                result?.results[0]?.components;

              const data = {
                village,
                state_district,
                state,
              };

              console.log("Address->", data);
              setAddress(data);
            }
          } catch (error) {
            // Handle errors from the async function
            console.error("Error fetching user location:", error);
          }
        },
        (error) => {
          // Handle errors from the geolocation API
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleOfferBannerChange = (e) => {
    setOfferBanner(e.target.files[0]);
  };

  const fetchStoreDetails = async () => {
    const resultData = await getCurrentStoreDetails();

    if (resultData.status === 200) {
      console.log("result data--->", resultData);
      !editclicked ? setDisabled(true) : setDisabled(false);
      dispatch(getCurrntStoreInfo(resultData?.checkStoreExist));
      setAddress(resultData?.checkStoreExist?.address[0]?.village);
      setCloseTime(resultData?.checkStoreExist?.closeTime);
      setOpenTime(resultData?.checkStoreExist?.openTime);
      setDeliveryTime(resultData?.checkStoreExist?.deliveryTime);
      setOffer(resultData?.checkStoreExist?.offer);
      setStoreName(resultData?.checkStoreExist?.storename);
      setFile(resultData?.checkStoreExist?.file?.url);
      setOfferBanner(resultData?.checkStoreExist?.OfferBanner?.url);
    }
  };

  const handleSaveStoreDetails = async () => {
    const storeID = localStorage.getItem("userid");
    if (
      [storename, deliveryTime, openTime, closeTime, address, storeID].some(
        (field) => field?.trim() !== ""
      )
    ) {
      const userInput = {
        openTime,
        closeTime,
        offer,
        deliveryTime,
      };

      const validate = validateStoreInfo(
        userInput.openTime,
        userInput.closeTime,
        userInput.offer,
        userInput.deliveryTime
      );

      if (!validate?.isValid) {
        setOpen(true);
        setSeverity("error");
        setMessage(validate?.errors[0]);
      } else {
        const result = await registerStore({
          storename,
          deliveryTime: validate?.deliveryTime,
          openTime: validate?.normalizedOpenTime,
          closeTime: validate?.normalizedCloseTime,
          address,
          offer: validate?.offer,
          file,
          storeID,
          logo,
          OfferBanner: offerbanner,
        });
      }
    }
  };

  useEffect(() => {
    fetchStoreDetails();
  }, [disabled]);

  return (
    <div className="StoreFormLayout">
      <div className="StoreLayoutGrid">
        <input
          type="text"
          placeholder={storename?.length ? storename : "Enter Store Name"}
          value={storename}
          onChange={(e) => setStoreName(e.target.value)}
          disabled={disabled}
        />
        <input
          type="text"
          placeholder="Enter Delivery Time"
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
          disabled={disabled}
        />
        <input
          type="text"
          placeholder="Enter Shop Open Time"
          value={openTime}
          onChange={(e) => setOpenTime(e.target.value)}
          disabled={disabled}
        />
        <input
          type="text"
          placeholder="Enter Shop Close Time"
          value={closeTime}
          disabled={disabled}
          onChange={(e) => setCloseTime(e.target.value)}
        />
        <label>
          Enter Banner Image
          <input
            type="file"
            placeholder="Enter Banner Image"
            onChange={handleFileChange}
            disabled={disabled}
          />
        </label>
        <input
          type="text"
          placeholder="Enter Offer"
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
          disabled={disabled}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <textarea
            type="text"
            placeholder="Enter Shop Address"
            value={address?.village || address}
            onChange={(e) => setAddress(e.target.value)}
            disabled={disabled}
            className="AddressTextarea"
          />
          <button
            className="getCurrentLocation"
            onClick={() => handleGetStoreAddress()}
          >
            Get Current Location
          </button>
        </div>
        <label style={{ marginLeft: "10px" }}>
          Enter Store Logo
          <input
            type="file"
            placeholder="Enter Banner Image"
            onChange={handleLogoChange}
            disabled={disabled}
          />
        </label>
        <DisplayStoreLogo
          message={"No Offer Banner Added"}
          image={offerbanner}
        />
        <label>
          {" "}
          Add Offer Banner
          <input
            type="file"
            placeholder="Add Offer Bannner"
            onChange={handleOfferBannerChange}
          />
        </label>
      </div>

      <CustomizedSnackbars
        open={open}
        setOpen={setOpen}
        severity={severity}
        message={message}
      />
      <div className="StoreSaveButtonContainner">
        <button onClick={() => handleSaveStoreDetails()}>Save</button>
      </div>
    </div>
  );
};

export default StoreForm;
