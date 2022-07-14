import React from "react";
import Header from "../Component/Header";
import SideNavForMap from "../Component/SideNavForMap";
import LikeComponent from "../Component/LikeComponent";
import Style from "./index.module.css";
import { useSelector } from "react-redux";

export default function Liked() {
  const { data } = useSelector((state) => state.likevideoReducer);
  console.log(data);
  return (
    <div>
      <Header />
      <div className={Style.like}>
        <div className={Style.navForMap}>
          <SideNavForMap />
        </div>

        <div className={Style.vidContainer}>
          {data.map((item) => {
            return (
              <div
                style={{
                  width: "100%",
                  height: "50px",
                  display: "flex",
                  flexDirection: "row",

                  cursor: "pointer",
                  backgroundColor: "red",
                }}
              >
                <div className={Style.contactMap}>
                  <div className={Style.srNumber}>
                    <img
                      src={item.snippet?.thumbnails?.medium.url}
                      alt={item.snippet?.title}
                      className={Style.imgFirst}
                      // we need whole thing about video so passing video
                    />
                  </div>

                  <p>{item.snippet?.title}</p>
                </div>
              </div>
            );
          })}
        </div>
        {data.length > 0 ? null : <LikeComponent />}
      </div>
    </div>
  );
}
