import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Verified = () => {
  const verifiedSelector = useSelector((store) => store?.store?.storedetails);
  console.log("verified selector", verifiedSelector);
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "end",
        padding: "4px",
        alignItems: "center",
        gap: "4px",
      }}
    >
      {verifiedSelector?.verified ? (
        <>
          {" "}
          <p
            style={{
              fontWeight: "600",
              color: "green",
              fontFamily: "Poppins",
              cursor: "pointer",
            }}
          >
            Verified
          </p>
          <VerifiedIcon sx={{ color: "green", cursor: "pointer" }} />{" "}
        </>
      ) : (
        <>
          {" "}
          <p
            style={{
              fontWeight: "600",
              color: "red",
              fontFamily: "Poppins",
              cursor: "pointer",
            }}
            onClick={() => navigate("/verify")}
          >
            Please verify your store
          </p>
          <VerifiedIcon sx={{ color: "red", cursor: "pointer" }} />
        </>
      )}
    </div>
  );
};

export default Verified;
