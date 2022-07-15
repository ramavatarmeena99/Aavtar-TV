import React from "react";
import Header from "../Component/Header";
import SideNavForMap from "../Component/SideNavForMap";
import LikeComponent from "../Component/LikeComponent";
import Style from "./index.module.css";
import { useSelector } from "react-redux";
import MainVideoContainer from "../Component/MaineVideoContainer";

export default function Liked() {
  const { likedata } = useSelector((state) => state.videoReducer);
  console.log(likedata);
  return (
    <div>
      <Header />
      <div className={Style.like}>
        <div className={Style.navForMap}>
          <SideNavForMap />
        </div>

        {likedata.length > 0 ? (
          <div className={Style.dataForvideo}>
            {likedata.map((item, index) => {
              return (
                <div key={index} className={Style.mainContainer}>
                  <MainVideoContainer item={item} />
                </div>
              );
            })}
          </div>
        ) : (
          <LikeComponent />
        )}
      </div>
    </div>
  );
}
