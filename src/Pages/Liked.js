import React from "react";
import Header from "../Component/Header";
import SideNavForMap from "../Component/SideNavForMap";
import VideoContainer from "../Component/VideoContainer";
import Style from "./index.module.css";
export default function Liked() {
  return (
    <div>
      <Header />
      <div className={Style.like}>
        <div className={Style.navForMap}>
          <SideNavForMap />
        </div>
        <div className={Style.vidContainer}>
          <VideoContainer />
        </div>
      </div>
    </div>
  );
}
