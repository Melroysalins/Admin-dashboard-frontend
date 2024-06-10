import React, { useState } from "react";
import SiderBarHeader from "./siderbarHeader";
import { Menulistcontent } from "../constants";
import MenuList from "./menuList";

const SiderBar = () => {
  const [showmenulist, setShowMenuList] = useState(true);
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
          </ul>
        </div>
      )}
    </div>
  );
};

export default SiderBar;
