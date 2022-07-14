import React from "react";
import ForNoVideoFound from "../ForNoVideoFound";
import Style from "./index.module.css";
import { useSelector } from "react-redux";
export default function LikeComponent() {
  const { data } = useSelector((state) => state.likevideoReducer);

  return (
    <div className={Style.likeComponent}>
      {/* {data.map((item) => {
        return (
          <div
            style={{
              width: "150px",
              height: "50px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backgroundColor: "red",
            }}
          >
            <div className={Style.contactMap}>
              <div className={Style.srNumber}>
                <img
                  className={Style.imgFirst}
                  src={item.videoImg}
                  alt="portfolio img"
                ></img>
              </div>
            </div>
          </div>
        );
      })} */}

      <ForNoVideoFound />
    </div>
  );
}
