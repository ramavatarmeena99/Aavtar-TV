import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideNavigation from "../SideNevigation";
import { Navigations } from "../../Data";
import Style from "./index.module.css";
export default function SideNavForMap() {
  const Navigate = useNavigate();
  // const tagHandler = (item) => {
  //   setSelectedId(item.id);

  //   // set tab index
  //   localStorage.setItem("tabIndex", item.id);
  // };
  const tabIndex = parseInt(localStorage.getItem("tabIndex"));

  const [selectedId, setSelectedId] = useState(tabIndex || 1);
  const tabHandler = (item) => {
    Navigate(`/${item.route}`);
    setSelectedId(item.id);
    localStorage.setItem("tabIndex", item.id);
  };
  return (
    <div className={Style.sideNavForMap}>
      {Navigations.map((item, index) => {
        const isActiveTab = selectedId === item.id;

        return (
          <div
            onClick={() => tabHandler(item)}
            key={index}
            style={isActiveTab ? activeCss : {}}
            className={Style.color}
          >
            <React.Fragment key={index}>
              <SideNavigation icon={item.icon} title={item.title} />
            </React.Fragment>
          </div>
        );
      })}
    </div>
  );
}

let activeCss = {
  backgroundColor: "black",
};
