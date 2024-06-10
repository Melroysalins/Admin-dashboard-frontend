import React from "react";

const ProfileEditForm = ({
  email,
  setEmail,
  number,
  setNumber,
  adminname,
  setAdminname,
  handleSaveProfileDetails,
}) => {
  return (
    <div className="ProfileEditForm">
      <input
        type="text"
        placeholder="Enter Your name"
        value={adminname}
        onChange={(e) => setAdminname(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Your Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <div className="ProfileEditSaveButton">
        <button onClick={handleSaveProfileDetails}>Save </button>
      </div>
    </div>
  );
};

export default ProfileEditForm;
