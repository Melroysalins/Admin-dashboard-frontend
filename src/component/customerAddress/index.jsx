import React from "react";
import "./index.css";

const CustomerAddress = ({ address }) => {
  return (
    <div className="CustomerAddressContainner">
      <textarea disabled={true}>
        {address?.village + " " + address?.state}
      </textarea>
    </div>
  );
};

export default CustomerAddress;
