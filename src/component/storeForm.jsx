import React, { useEffect, useState } from "react";
import { getCurrentStoreDetails, registerStore } from "../api/store";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CustomizedSnackbars from "./snackBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCurrntStoreInfo } from "../store/storeSlice";

import MenuItem from "@mui/material/MenuItem";
import { getStoreAddress } from "../api/getStoreAddress";
import { validateStoreInfo } from "../utils/validateStoreInfo";

const currencies = [
  {
    value: "Veg",
    label: "Veg",
  },
  {
    value: "NonVeg",
    label: "NonVeg",
  },
  {
    value: "Both",
    label: "Both",
  },
];

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
  const [cuisine, setCuisin] = useState("");
  const [type, setType] = useState("");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const storeID = localStorage.getItem("userid");
  const [editclicked, setEditClicked] = useState(false);
  const [disabled, setDisabled] = useState();
  const dispatch = useDispatch();
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 410);

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
      setType(resultData?.checkStoreExist?.restauranttype);
      setCuisin(resultData?.checkStoreExist?.cuisine);
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
          restauranttype: type,
          cuisine: cuisine,
        });
      }
    }
  };

  useEffect(() => {
    fetchStoreDetails();
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 410);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [disabled]);

  return (
    <div className="StoreFormLayout">
      <div className="StoreLayoutGrid">
        <Box
          sx={{
            width: !isScreenSmall ? 400 : 240,
            maxWidth: "100%",
            border: "none",
          }}
        >
          <TextField
            fullWidth
            label="Enter Store Name"
            id="fullWidth"
            value={storename}
            onChange={(e) => setStoreName(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: !isScreenSmall ? 400 : 240,
            maxWidth: "100%",
            border: "none",
          }}
        >
          <TextField
            fullWidth
            label="Enter Delivery Time"
            id="fullWidth"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: !isScreenSmall ? 400 : 240,
            maxWidth: "100%",
            border: "none",
          }}
        >
          <TextField
            fullWidth
            label="Enter Shop Open Time"
            id="fullWidth"
            value={openTime}
            onChange={(e) => setOpenTime(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: !isScreenSmall ? 400 : 240,
            maxWidth: "100%",
            border: "none",
          }}
        >
          <TextField
            fullWidth
            label="Enter Shop Close Time"
            id="fullWidth"
            value={closeTime}
            onChange={(e) => setCloseTime(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: !isScreenSmall ? 400 : 240,
            maxWidth: "100%",
            border: "none",
          }}
        >
          <TextField
            fullWidth
            label="  Enter Banner Image"
            id="fullWidth"
            type="file"
            onChange={handleFileChange}
          />
        </Box>
        <Box
          sx={{
            width: !isScreenSmall ? 400 : 240,
            maxWidth: "100%",
            border: "none",
          }}
        >
          <TextField
            fullWidth
            label="  Enter Offer"
            id="fullWidth"
            value={offer === "null" ? "" : offer}
            onChange={(e) => setOffer(e.target.value)}
          />
        </Box>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Box
            sx={{
              width: !isScreenSmall ? 400 : 240,
              maxWidth: "100%",
              border: "none",
            }}
          >
            <TextField
              fullWidth
              label="Enter Shop Address"
              id="fullWidth"
              value={address?.village || address}
              onChange={(e) => setAddress(e.target.value)}
              disabled={disabled}
            />
          </Box>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="getCurrentLocation"
            onClick={() => handleGetStoreAddress()}
          >
            Get Current Location
          </button>
        </div>
        <Box
          sx={{
            width: !isScreenSmall ? 400 : 240,
            maxWidth: "100%",
            border: "none",
          }}
        >
          <TextField
            fullWidth
            label="Enter Store Logo"
            id="fullWidth"
            type="file"
            onChange={handleLogoChange}
          />
        </Box>
        <Box
          sx={{
            width: !isScreenSmall ? 400 : 240,
            maxWidth: "100%",
            border: "none",
          }}
        >
          <TextField
            fullWidth
            label="Available cuisines"
            id="fullWidth"
            type="text"
            value={cuisine}
            onChange={(e) => setCuisin(e.target.value)}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              helperText="select your restaurant type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </Box>
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
