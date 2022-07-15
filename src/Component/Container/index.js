import React from "react";
import VideoContainer from "../VideoContainer";
import SideNavForMap from "../SideNavForMap";
import Style from "./index.module.css";

export default function Container() {
  return (
    <div className={Style.container}>
      <SideNavForMap />

      <div className={Style.videoContainer}>
        <VideoContainer />
      </div>
    </div>
  );
}
