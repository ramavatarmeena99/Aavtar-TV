import React from "react";
import Header from "../Component/Header";
import SideNavForMap from "../Component/SideNavForMap";
import Style from "./index.module.css";
import HistoryComponent from "../Component/HIstoryComponent";
import { useSelector } from "react-redux";
import MainVideoContainer from "../Component/MaineVideoContainer";

export default function History() {
  const { historydata } = useSelector((state) => state.videoReducer);

  return (
    <div>
      <Header />
      <div className={Style.like}>
        <div className={Style.navForMap}>
          <SideNavForMap />
        </div>
        {historydata.length > 0 ? (
          <div className={Style.dataForvideo}>
            {historydata.map((item, index) => {
              return (
                <div key={index} className={Style.mainContainer}>
                  <MainVideoContainer item={item} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className={Style.vidContainer}>
            <HistoryComponent />
          </div>
        )}
        :
      </div>
    </div>
  );
}
