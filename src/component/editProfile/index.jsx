import React, { useEffect, useState } from "react";
import "./index.css";
import ProfilePhoto from "../profilePhoto";
import ProfileEditForm from "../profileEditForm";
import { EditUserProfileDetails, getUserProfileDetails } from "../../api/user";
import CustomizedSnackbars from "../snackBar";

const EditProfile = () => {
  const [file, setFile] = useState("");
  const [adminname, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [load, setLoad] = useState(false);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState("");
  const FetchUserInfo = async () => {
    const result = await getUserProfileDetails();

    if (result?.status === 200) {
      setFile(result?.userInfo?.image?.url);
      setAdminName(result?.userInfo?.adminname);
      setEmail(result?.userInfo?.email);
      setNumber(result?.userInfo?.phone);
    }
  };

  const handleSaveProfileDetails = async () => {
    const result = await EditUserProfileDetails({
      adminname,
      email,
      number,
      Pimage: file,
    });

    if (result?.status === 200) {
      setOpen(true);
      setMessage(result?.message);
      setLoad(true);
    } else {
      setOpen(true);
      setMessage(result?.message);
      setSeverity("error");
    }
  };

  useEffect(() => {
    FetchUserInfo();
  }, [load]);

  return (
    <div className="EditProfilePageContainner">
      <div className="EditProfilePagee">
        <div className="dash"></div>
        <h4>Edit Profile</h4>
      </div>
      <div className="ProfileMainInfoContainner">
        <ProfilePhoto image={file} setFile={setFile} />
        <ProfileEditForm
          email={email}
          number={number}
          adminname={adminname}
          setAdminName={setAdminName}
          setEmail={setEmail}
          setNumber={setNumber}
          handleSaveProfileDetails={handleSaveProfileDetails}
          setLoad={setLoad}
        />
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

export default EditProfile;
