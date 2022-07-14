import React from "react";
import Header from "../Component/Header";
import SideNavForMap from "../Component/SideNavForMap";
import Style from "./index.module.css";
import WatchLaterComponent from "../Component/WatchlaterComponent";

export default function WatchLater() {
  return (
    <div>
      <Header />
      <div className={Style.like}>
        <div className={Style.navForMap}>
          <SideNavForMap />
        </div>
        <div className={Style.vidContainer}>
          <WatchLaterComponent />
        </div>
      </div>
    </div>
  );
}
