import React from "react";

import Style from "./index.module.css";

export default function MainVideoContainer(props) {
  return (
    <div className={Style.mainVideoContainer}>
      <div className={Style.contactMap}>
        <div className={Style.srNumber}>
          <img
            src={props.imgSrc}
            alt={props.imgSrc}
            className={Style.imgForVideo}
          />
        </div>
        <div className={Style.videoTitle}>
          <p>{props.videoTitle}</p>
        </div>
      </div>
    </div>
  );
}
