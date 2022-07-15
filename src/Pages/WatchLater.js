import React from "react";
import Header from "../Component/Header";
import SideNavForMap from "../Component/SideNavForMap";
import Style from "./index.module.css";
import WatchLaterComponent from "../Component/WatchlaterComponent";
import { useSelector } from "react-redux";
import MainVideoContainer from "../Component/MaineVideoContainer";

export default function WatchLater() {
  const { watchlaterdata } = useSelector((state) => state.videoReducer);

  return (
    <div>
      <Header />
      <div className={Style.like}>
        <div className={Style.navForMap}>
          <SideNavForMap />
        </div>

        {watchlaterdata.length > 0 ? (
          <div className={Style.dataForvideo}>
            {watchlaterdata.map((item, index) => {
              return (
                <div key={index} className={Style.mainContainer}>
                  <MainVideoContainer item={item} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className={Style.vidContainer}>
            <WatchLaterComponent />
          </div>
        )}
      </div>
    </div>
  );
}
