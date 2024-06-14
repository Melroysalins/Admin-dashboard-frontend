import React from "react";

const DisplayStoreLogo = ({ image, message }) => {
  return (
    <div className="DisplayStoreLogo">
      <img src={image} alt={!message ? "no logo added" : message} />
    </div>
  );
};

export default DisplayStoreLogo;
