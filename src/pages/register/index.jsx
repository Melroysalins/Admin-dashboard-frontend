import React, { useState } from "react";
import LoginImageLayout from "../../component/loginImage";
import LoginLayout from "../../component/loginLayout";

const Registerpage = () => {
  const [isregisteredpage, setIsRegisteredPage] = useState(true);

  return (
    <div className="LoginPage">
      <div className="MainLoginLayout">
        <LoginImageLayout />
        <LoginLayout
          setIsRegisteredPage={setIsRegisteredPage}
          isregisteredpage={isregisteredpage}
        />
      </div>
    </div>
  );
};

export default Registerpage;
