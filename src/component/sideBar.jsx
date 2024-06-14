import React, { useEffect, useState } from "react";
import SiderBarHeader from "./siderbarHeader";
import { Menulistcontent } from "../constants";
import MenuList from "./menuList";

const SiderBar = () => {
  const [showmenulist, setShowMenuList] = useState(true);

  const [userloggedin, setUserLoggedIn] = useState();

  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 670);

  const isloggedIn = JSON.parse(localStorage.getItem("isloggin"));

  console.log("login--->", typeof isloggedIn);

  useEffect(() => {
    setUserLoggedIn(isloggedIn);
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 670);
      setShowMenuList(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isloggedIn, userloggedin]);

  return (
    <div className="StyleBarContainner">
      <SiderBarHeader
        setShowMenuList={setShowMenuList}
        showmenulist={showmenulist}
      />
      {showmenulist && (
        <div className="SiderBarContentContainner">
          <ul>
            {Menulistcontent?.map((list) => (
              <MenuList key={list?.id} data={list} />
            ))}
            <MenuList
              key={111}
              data={isloggedIn ? "Logout" : "Login"}
              setUserLoggedIn={setUserLoggedIn}
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default SiderBar;
