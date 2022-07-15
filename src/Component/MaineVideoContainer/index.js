import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HistoryAction } from "../../Redux/action";

import Style from "./index.module.css";

export default function MainVideoContainer(props) {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { historydata } = useSelector((state) => state.videoReducer);

  const redirectVideoPlayer = () => {
    const myHistoryVideo = [...historydata, props.item];
    dispatch(HistoryAction(myHistoryVideo));
    Navigate("/videoplayer", {
      state: {
        item: props.item,
      },
    });
  };

  return (
    <div className={Style.mainVideoContainer}>
      <div className={Style.contactMap} onClick={redirectVideoPlayer}>
        <div className={Style.srNumber}>
          <img
            src={props.item.snippet.thumbnails.medium.url}
            alt={props.item.snippet.title}
            className={Style.imgForVideo}
          />
        </div>
        <div className={Style.videoTitle}>
          <p>{props.item.snippet.title}</p>
        </div>
      </div>
    </div>
  );
}
