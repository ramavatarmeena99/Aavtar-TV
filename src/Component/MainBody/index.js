import React from "react";
import Style from "./index.module.css";
import { Link } from "react-router-dom";

export default function MainBody() {
  return (
    <div className={Style.mainBody}>
      <p className={Style.topHeading}>AvatarTv+ Originals</p>
      <h1 className={Style.middleHeading}>Perfect plaform for ASTROPHILE!!</h1>
      <h2 className={Style.middleHeading}>
        Watch unlimited Astronomy, Space and Universe related videos
      </h2>
      <button className={Style.exploreNow}>
        <Link to="/videoList"> Explore Now</Link>
      </button>
    </div>
  );
}
