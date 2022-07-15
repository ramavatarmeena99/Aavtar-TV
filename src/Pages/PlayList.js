import React from "react";
import Header from "../Component/Header";
import SideNavForMap from "../Component/SideNavForMap";
import Style from "./index.module.css";
import PlaylistComponent from "../Component/PlaylistComponent";
import MainVideoContainer from "../Component/MaineVideoContainer";
import { useSelector } from "react-redux";

export default function PlayList() {
  const { playlistdata } = useSelector((state) => state.videoReducer);

  return (
    <div>
      <Header />
      <div className={Style.like}>
        <div className={Style.navForMap}>
          <SideNavForMap />
        </div>
        {playlistdata.length > 0 ? (
          <div className={Style.dataForvideo}>
            {playlistdata.map((item, index) => {
              return (
                <div key={index} className={Style.mainContainer}>
                  <MainVideoContainer item={item} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className={Style.vidContainer}>
            <PlaylistComponent />
          </div>
        )}{" "}
        :
      </div>
    </div>
  );
}
