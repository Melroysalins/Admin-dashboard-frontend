import React, { useEffect, useState } from "react";
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
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 440);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 440);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="ProfileEditForm">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: !isScreenSmall ? "45ch" : "30ch" },
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
          "& > :not(style)": { m: 1, width: !isScreenSmall ? "45ch" : "30ch" },
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
          "& > :not(style)": { m: 1, width: !isScreenSmall ? "45ch" : "30ch" },
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
