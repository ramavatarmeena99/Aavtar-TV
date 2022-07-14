import React from "react";

import Header from "../Component/Header";
import SideNavForMap from "../Component/SideNavForMap";
import Style from "./index.module.css";
import PlaylistComponent from "../Component/PlaylistComponent";

export default function PlayList() {
  return (
    <div>
      <Header />
      <div className={Style.like}>
        <div className={Style.navForMap}>
          <SideNavForMap />
        </div>
        <div className={Style.vidContainer}>
          <PlaylistComponent />
        </div>
      </div>
    </div>
  );
}
