import React from "react";
import Header from "../Component/Header";
import SideNavForMap from "../Component/SideNavForMap";
import Style from "./index.module.css";
import HistoryComponent from "../Component/HIstoryComponent";

export default function History() {
  return (
    <div>
      <Header />
      <div className={Style.like}>
        <div className={Style.navForMap}>
          <SideNavForMap />
        </div>
        <div className={Style.vidContainer}>
          <HistoryComponent />
        </div>
      </div>
    </div>
  );
}
