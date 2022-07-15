import React from "react";

import Style from "./index.module.css";

export default function MainVideoContainer(props) {
  return (
    <div className={Style.vidContainer}>
      {/* {YoutubeData.map((YoutubeData, index) => {
        return ( */}
      <div className={Style.contactMap}>
        <div className={Style.srNumber}>
          <img
            src={props.imgSrc}
            alt={props.imgSrc}
            className={Style.imgFirst}
          />
        </div>

        <p>{props.videoTitle}</p>
      </div>
      );
      {/* })} */}
    </div>
  );
}
