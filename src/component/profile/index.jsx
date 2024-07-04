import React, { useEffect, useState } from "react";
import "./index.css";
import EditIcon from "@mui/icons-material/Edit";
import { EditUserProfileDetails, getUserProfileDetails } from "../../api/user";
import { EmailandPhoneValidation } from "../../utils/validattions";
import CustomizedSnackbars from "../snackBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Profile = () => {
  const [adminname, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [editclicked, setEditClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

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

  useEffect(() => {
    fetchUserDetails();
  }, [editclicked, disabled]);

  return (
    <div className="ProfileContainner">
      <div className="ProfileFormContainner">
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Enter name"
            id="fullWidth"
            value={adminname}
            onChange={(e) => setAdminName(e.target.value)}
          />
        </Box>

        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Enter email "
            id="fullWidth"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>

        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Enter phone number"
            id="fullWidth"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Box>
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
