import React from "react";
import Style from "./index.module.css";
import emptyPic from "../../Img/emptyPic.svg";
export default function ForNoVideoFound() {
  return (
    <div className={Style.forNoVideoFound}>
      <div className={Style.leftSide}>
        <img
          className={Style.emptyPic}
          src={emptyPic}
          alt="portfolio img"
        ></img>
      </div>
      <div className={Style.rightSide}>
        <h1 className={Style.noVideoFound}>No Videos Found :(</h1>
        <p className={Style.browseVideo}>Browse Your Favorite Videos Now!</p>
        <button className={Style.watchVideo}>Watch Video</button>
      </div>
    </div>
  );
}
