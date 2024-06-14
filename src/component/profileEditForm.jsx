import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const ProfileEditForm = ({
  email,
  setEmail,
  number,
  setNumber,
  adminname,
  setAdminname,
  handleSaveProfileDetails,
  setLoad,
}) => {
  return (
    <div className="ProfileEditForm">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-uncontrolled"
          label="Your Name"
          value={adminname}
          onChange={(e) => setAdminname(e.target.value)}
        />
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-uncontrolled"
          label="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-uncontrolled"
          label="Your Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </Box>

      <div className="ProfileEditSaveButton">
        <button onClick={handleSaveProfileDetails}>Save </button>
      </div>
    </div>
  );
};

export default ProfileEditForm;
