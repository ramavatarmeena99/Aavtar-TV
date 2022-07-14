import React from "react";
import ForNoVideoFound from "../ForNoVideoFound";
import Style from "./index.module.css";
export default function LikeComponent() {
  return (
    <div className={Style.likeComponent}>
      <ForNoVideoFound />
    </div>
  );
}
