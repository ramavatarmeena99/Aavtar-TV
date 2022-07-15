import React from "react";
import Header from "../Component/Header";
import SideNavForMap from "../Component/SideNavForMap";
import LikeComponent from "../Component/LikeComponent";
import Style from "./index.module.css";
import { useSelector } from "react-redux";
import MainVideoContainer from "../Component/MaineVideoContainer";

export default function Liked() {
  const { data } = useSelector((state) => state.likevideoReducer);

  return (
    <div>
      <Header />
      <div className={Style.like}>
        <div className={Style.navForMap}>
          <SideNavForMap />
        </div>
        <div className={Style.dataForvideo}>
          {data.map((item) => {
            return (
              <div className={Style.mainContainer}>
                <MainVideoContainer
                  imgSrc={item.snippet.thumbnails.medium.url}
                  videoTitle={item.snippet.title}
                />
              </div>
            );
          })}
        </div>
        {data.length > 0 ? null : <LikeComponent />}
      </div>
    </div>
  );
}
