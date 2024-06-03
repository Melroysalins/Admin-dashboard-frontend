import React, { useEffect, useState } from "react";
import { getCurrentStoreDetails, registerStore } from "../api/store";
import { combineSlices } from "@reduxjs/toolkit";
import CustomizedSnackbars from "./snackBar";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { updateStore } from "../api/updateStore";
import { useDispatch } from "react-redux";
import { getCurrntStoreInfo } from "../store/storeSlice";

const StoreForm = () => {
  const [storename, setStoreName] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [file, setFile] = useState("");
  const [logo, setLogo] = useState("");
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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handlesaveStoreDetails = async () => {
    if (!editclicked) {
      if (openTime === closeTime) {
        setOpen(true);
        setSeverity("error");
        setMessage("Shop open time and close time cannot be same");
      } else if (
        [
          storename,
          deliveryTime,
          openTime,
          closeTime,
          address,
          offer,
          file,
        ].some((filed) => filed?.trim !== "")
      ) {
        const storeRegister = await registerStore({
          storename,
          deliveryTime,
          openTime,
          closeTime,
          address,
          offer,
          file,
          logo,
          storeID,
        });

        if (storeRegister?.status === 200) {
          setOpen(true);
          setSeverity("success");
          setMessage(storeRegister?.message);
          setDisabled(true);
          setEditClicked(false);
        } else {
          setOpen(true);
          setMessage(storeRegister?.message);
        }

        console.log("Store creation", storeRegister);
      }
    } else {
      const updatedStoreResult = await updateStore({
        storename,
        deliveryTime,
        openTime,
        closeTime,
        address,
        offer,
        file,
        logo,
      });
      if (updatedStoreResult?.status === 200) {
        setDisabled(true);
        setEditClicked(false);
      }
      console.log("updated store details frontend", updatedStoreResult);
    }
  };

  const fetchStoreDetails = async () => {
    const resultData = await getCurrentStoreDetails();
    console.log("resultData", resultData);
    if (resultData.status === 200) {
      !editclicked ? setDisabled(true) : setDisabled(false);
      dispatch(getCurrntStoreInfo(resultData?.checkStoreExist));
      setAddress(resultData?.checkStoreExist?.address);
      setCloseTime(resultData?.checkStoreExist?.closeTime);
      setOpenTime(resultData?.checkStoreExist?.openTime);
      setDeliveryTime(resultData?.checkStoreExist?.deliveryTime);
      setOffer(resultData?.checkStoreExist?.offer);
      setStoreName(resultData?.checkStoreExist?.storename);
      setFile(resultData?.checkStoreExist?.file?.url);
    }
  };

  const handleEdit = async () => {
    setDisabled(false);
    setEditClicked(true);
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
        <textarea
          type="text"
          placeholder="Enter Shop Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          disabled={disabled}
        />
        <label style={{ marginLeft: "10px" }}>
          Enter Store Logo
          <input
            type="file"
            placeholder="Enter Banner Image"
            onChange={handleLogoChange}
            disabled={disabled}
          />
        </label>
      </div>
      <div className="StoreSaveButtonContainner">
        <div className="editicon">
          <EditIcon
            sx={{ padding: "3px" }}
            onClick={() => handleEdit()}
            disabled={editclicked}
          />
          <div className="tooltip">Edit</div>
        </div>
        <button onClick={() => handlesaveStoreDetails()} disabled={disabled}>
          Save
        </button>
      </div>
      <CustomizedSnackbars
        open={open}
        setOpen={setOpen}
        severity={severity}
        message={message}
      />
    </div>
  );
};

export default StoreForm;
