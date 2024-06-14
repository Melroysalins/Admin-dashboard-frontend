import React, { useEffect, useState } from "react";
import "./index.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DisplayStoreImage from "../displayStoreImage";
import DisplayStoreLogo from "../displayStoreLogo";
import Button from "@mui/material/Button";
import { getCurrentStoreDetails } from "../../api/store";
import { updateStore } from "../../api/updateStore";
import CustomizedSnackbars from "../snackBar";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  validateStoreInfo,
  validateStoreInfo2,
} from "../../utils/validateStoreInfo";

const EditStore = () => {
  const [storename, setStorename] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [address, setAddress] = useState("");
  const [offer, setOffer] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [file, setFile] = useState("");
  const [logo, setLogo] = useState("");
  const [type, setType] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [offerbanner, setOfferBanner] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [load, setLoad] = useState(false);

  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 460);

  const FetchStoreDetails = async () => {
    const result = await getCurrentStoreDetails();

    if (result?.status === 200) {
      setStorename(result?.checkStoreExist?.storename);
      setAddress(
        result?.checkStoreExist?.address[0].village ||
          result?.checkStoreExist?.address[0]
      );
      setOpenTime(result?.checkStoreExist?.openTime);
      setCloseTime(result?.checkStoreExist?.closeTime);
      setOffer(result?.checkStoreExist?.offer);
      setDeliveryTime(result?.checkStoreExist?.deliveryTime);
      setFile(result?.checkStoreExist?.file?.url);
      setLogo(result?.checkStoreExist?.logo?.url);
      setCuisine(result?.checkStoreExist?.cuisine);
      setType(result?.checkStoreExist?.restauranttype);
    }
  };

  const handleSaveStoreDetails = async () => {
    if (openTime === closeTime) {
      setOpen(true);
      setMessage("OpenTime and Close Time cannot be same");
      setSeverity("error");
    }

    const userInput = {
      openTime,
      closeTime,
      offer,
      deliveryTime,
      type,
    };

    const validate = validateStoreInfo2(
      userInput.openTime,
      userInput.closeTime,
      userInput.offer,
      userInput.deliveryTime,
      userInput.type
    );

    if (!validate?.isValid) {
      setOpen(true);
      setSeverity("error");
      setMessage(validate?.errors[0]);
    } else {
      const result = await updateStore({
        address,
        openTime,
        closeTime,
        offer,
        storename,
        file,
        deliveryTime,
        logo,
        restauranttype: type,
        cuisine: cuisine,
      });
      if (result.status === 200) {
        setOpen(true);
        setSeverity("success");
        setMessage(result?.message);
        setLoad(true);
      } else {
        setOpen(true);
        setMessage(result?.message);
        setSeverity("error");
      }
    }
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]);
  };

  useEffect(() => {
    FetchStoreDetails();
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 460);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [load]);

  return (
    <div className="EditStorePage">
      <div className="EditStoreContainer">
        <Box
          sx={{
            width: !isScreenSmall ? 430 : 240,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Store Name"
            id="fullWidth"
            value={storename}
            onChange={(e) => setStorename(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: !isScreenSmall ? 430 : 240,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Store open Time"
            id="fullWidth"
            value={openTime}
            onChange={(e) => setOpenTime(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: !isScreenSmall ? 430 : 240,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Store Close Time"
            id="fullWidth"
            value={closeTime}
            onChange={(e) => setCloseTime(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: !isScreenSmall ? 430 : 240,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Store Address"
            id="fullWidth"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: !isScreenSmall ? 430 : 240,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Offer"
            id="fullWidth"
            value={offer}
            onChange={(e) => setOffer(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: !isScreenSmall ? 430 : 240,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="deliverytime"
            id="fullWidth"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
          />
        </Box>
        {/* new input boxes */}
        <Box
          sx={{
            width: !isScreenSmall ? 430 : 240,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Cuisine"
            id="fullWidth"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: !isScreenSmall ? 430 : 240,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Restaurant Type"
            id="fullWidth"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </Box>
      </div>
      <div className="storeLogoandImageContainner">
        <div className="StoreImageInput">
          <DisplayStoreImage image={file} />
          <label>Add Banner </label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div className="StoreImageInput">
          <DisplayStoreLogo image={logo} />
          <label>Add Logo </label>
          <input type="file" onChange={handleLogoChange} />
        </div>
      </div>

      <div className="saveStoreDetailContainner">
        <Button
          variant="contained"
          sx={{
            background: "black",
            "&:hover": {
              opacity: 0.7,
              background: "black",
            },
          }}
          onClick={() => handleSaveStoreDetails()}
        >
          Save
        </Button>
      </div>
      <CustomizedSnackbars
        open={open}
        setOpen={setOpen}
        message={message}
        severity={severity}
      />
    </div>
  );
};

export default EditStore;
