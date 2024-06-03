import React, { useEffect, useState } from "react";
import "./index.css";
import EditIcon from "@mui/icons-material/Edit";
import { EditUserProfileDetails, getUserProfileDetails } from "../../api/user";
import { EmailandPhoneValidation } from "../../utils/validattions";
import CustomizedSnackbars from "../snackBar";

const Profile = () => {
  const [adminname, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [editclicked, setEditClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const handlesaveUserDetail = async () => {
    // check the validation part  and then assign it to api call

    const validatedData = EmailandPhoneValidation(email, number);

    if (!validatedData.length) {
      const updatedResult = await EditUserProfileDetails({
        adminname,
        email,
        number,
      });

      if (updatedResult?.status === 200) {
        setOpen(true);
        setMessage(updatedResult?.message);
        setSeverity("success");
      }
    } else {
      setOpen(true);
      setSeverity("error");
      setMessage(validatedData);
    }
  };

  const fetchUserDetails = async () => {
    const userInfo = await getUserProfileDetails();
    if (!editclicked) {
      if (userInfo.status === 200) {
        setEditClick(false);
        setDisabled(true);
        setAdminName(userInfo?.userInfo?.adminname);
        setEmail(userInfo?.userInfo?.email);
        setNumber(userInfo?.userInfo?.phone);
      } else {
        setDisabled(false);
      }
    }

    // console.log("user info", userInfo);
  };

  const handleEditUserDetail = () => {
    setDisabled(false);
    setEditClick(true);
  };

  useEffect(() => {
    fetchUserDetails();
  }, [editclicked, disabled]);

  return (
    <div className="ProfileContainner">
      <div className="ProfileFormContainner">
        <input
          type="text"
          placeholder="Enter name"
          value={adminname}
          onChange={(e) => setAdminName(e.target.value)}
          disabled={disabled}
        />
        <input
          type="email"
          placeholder="Enter email "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disabled}
        />
        <input
          type="number"
          placeholder="Enter phone number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          disabled={disabled}
        />
      </div>
      <div className="StoreSaveButtonContainner">
        <div className="editicon">
          <EditIcon
            sx={{ padding: "3px" }}
            onClick={() => handleEditUserDetail()}
            disabled={editclicked}
          />
          <div className="tooltip">Edit</div>
        </div>
        <button onClick={() => handlesaveUserDetail()} disabled={disabled}>
          Save
        </button>
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

export default Profile;
