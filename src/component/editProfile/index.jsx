import React from "react";
import "./index.css";
import ProfilePhoto from "../profilePhoto";
import ProfileEditForm from "../profileEditForm";

const EditProfile = () => {
  return (
    <div className="EditProfilePageContainner">
      <div className="EditProfilePagee">
        <div className="dash"></div>
        <h4>Edit Profile</h4>
      </div>
      <div className="ProfileMainInfoContainner">
        <ProfilePhoto />
        <ProfileEditForm />
      </div>
    </div>
  );
};

export default EditProfile;
