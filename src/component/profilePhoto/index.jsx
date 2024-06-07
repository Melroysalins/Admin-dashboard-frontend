import React from "react";
import "./index.css";
import profileimage from "../../asset/profileimage.jpg";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const ProfilePhoto = () => {
  return (
    <div className="ProfilePhotoContainner">
      <div className="ProfilePictureDiv">
        <img src={profileimage} />
        <CameraAltIcon className="cameraIcon" />
      </div>
      <div className="ProfileInputBox">
        <input type="file" placeholder="Add New profile Image" />
      </div>
    </div>
  );
};

export default ProfilePhoto;
