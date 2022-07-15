import React from "react";
import { useNavigate } from "react-router-dom";

import Style from "./index.module.css";

export default function MainVideoContainer(props) {
  const Navigate = useNavigate();

  const redirectVideoPlayer = (item) => {
    Navigate(`/videoplayer`);
  };
  return (
    <div className={Style.mainVideoContainer}>
      <div className={Style.contactMap}>
        <div className={Style.srNumber}>
          <img
            src={props.imgSrc}
            alt={props.imgSrc}
            className={Style.imgForVideo}
            onClick={redirectVideoPlayer}
          />
        </div>
        <div className={Style.videoTitle}>
          <p>{props.videoTitle}</p>
        </div>
      </div>
    </div>
  );
}
