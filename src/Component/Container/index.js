import React, { useState } from "react";
import SideNavigation from "../SideNevigation";
import VideoContainer from "../VideoContainer";

import Style from "./index.module.css";
import { Navigations } from "../../Data";
export default function Container(props) {
  const tabIndex = parseInt(localStorage.getItem("tabIndex"));

  const [selectedId, setSelectedId] = useState(tabIndex || 1);
  const tabHandler = (item) => {
    setSelectedId(item.id);
    localStorage.setItem("tabIndex", item.id);
  };
  //   const Icon = props.icon;
  return (
    <div className={Style.container}>
      <div className={Style.sideNavigation}>
        {Navigations.map((item, index) => {
          const isActiveTab = selectedId === item.id;

          return (
            <div
              onClick={() => tabHandler(item)}
              key={index}
              style={isActiveTab ? activeCss : {}}
              className={Style.tabColor}
            >
              <React.Fragment key={index}>
                <SideNavigation icon={item.icon} title={item.title} />
              </React.Fragment>
            </div>
          );
        })}
      </div>
      <div className={Style.videoContainer}>
        <VideoContainer />
      </div>
    </div>
  );
}

let activeCss = {
  backgroundColor: "black",
};
