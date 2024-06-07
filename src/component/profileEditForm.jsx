import React from "react";

const ProfileEditForm = () => {
  return (
    <div className="ProfileEditForm">
      <input type="text" placeholder="Enter Your name" />
      <input type="email" placeholder="Enter Your email" />
      <input type="number" placeholder="Enter Your Number" />

      <div className="ProfileEditSaveButton">
        <button>Save </button>
      </div>
    </div>
  );
};

export default ProfileEditForm;
