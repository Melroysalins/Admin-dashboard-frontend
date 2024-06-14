import React from "react";
import "./index.css";
import profileimage from "../../asset/profileimage.jpg";

const ProfilePhoto = ({ image, setFile }) => {
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="ProfilePhotoContainner">
      <div className="ProfilePictureDiv">
        <img src={!image ? profileimage : image} alt="profile image" />
      </div>
      <div className="ProfileInputBox">
        <input
          type="file"
          placeholder="Add New profile Image"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default ProfilePhoto;
