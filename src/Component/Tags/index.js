import React from "react";
import Style from "./index.module.css";
export default function Tags(props) {
  return (
    <div className={Style.tags}>
      <p className={Style.tagTitle}>{props.tagTitle}</p>
    </div>
  );
}
