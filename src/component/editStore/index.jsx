import React, { useEffect, useState } from "react";
import "./index.css";
import DisplayStoreImage from "../displayStoreImage";
import DisplayStoreLogo from "../displayStoreLogo";
import Button from "@mui/material/Button";
import { getCurrentStoreDetails } from "../../api/store";
import { updateStore } from "../../api/updateStore";
import CustomizedSnackbars from "../snackBar";
import DeleteIcon from "@mui/icons-material/Delete";

const EditStore = () => {
  const [storename, setStorename] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [address, setAddress] = useState("");
  const [offer, setOffer] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [file, setFile] = useState("");
  const [logo, setLogo] = useState("");
  const [offerbanner, setOfferBanner] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [load, setLoad] = useState(false);

  const FetchStoreDetails = async () => {
    const result = await getCurrentStoreDetails();

    if (result?.status === 200) {
      setStorename(result?.checkStoreExist?.storename);
      setAddress(result?.checkStoreExist?.address);
      setOpenTime(result?.checkStoreExist?.openTime);
      setCloseTime(result?.checkStoreExist?.closeTime);
      setOffer(result?.checkStoreExist?.offer);
      setDeliveryTime(result?.checkStoreExist?.deliveryTime);
      setFile(result?.checkStoreExist?.file?.url);
      setLogo(result?.checkStoreExist?.logo?.url);
      setOfferBanner(result?.checkStoreExist?.OfferBanner?.url);
    }
  };

  const handleSaveStoreDetails = async () => {
    if (openTime === closeTime) {
      setOpen(true);
      setMessage("OpenTime and Close Time cannot be same");
      setSeverity("error");
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
        OfferBanner: offerbanner,
      });
      if (result.status === 200) {
        setOpen(true);
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

  const handleOfferBannerChange = (e) => {
    setOfferBanner(e.target.files[0]);
  };

  useEffect(() => {
    FetchStoreDetails();
  }, [load]);

  return (
    <div className="EditStorePage">
      <div className="EditStoreContainer">
        <input
          type="text"
          placeholder="Store Name"
          value={storename}
          onChange={(e) => setStorename(e.target.value)}
        />
        <input
          type="text"
          placeholder="Store open Time"
          value={openTime}
          onChange={(e) => setOpenTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Store Close Time"
          value={closeTime}
          onChange={(e) => setCloseTime(e.target.value)}
        />
        <textarea
          placeholder="Store Address"
          value={address[0]?.village}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Offer"
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
        />
        <input
          type="text"
          placeholder="deliverytime"
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
        />
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
      <div
        style={{
          marginTop: "60px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        <DisplayStoreLogo image={offerbanner} />
        <div style={{ display: "flex", gap: "12px" }}>
          <label>Add OfferBanner </label>
          <input type="file" onChange={handleOfferBannerChange} />
        </div>
        <DeleteIcon
          style={{ marginRight: "30px" }}
          onClick={() => setOfferBanner("")}
        />
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
