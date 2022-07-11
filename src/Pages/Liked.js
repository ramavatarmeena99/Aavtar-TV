import React from "react";
import Header from "../Component/Header";
import SideNavForMap from "../Component/SideNavForMap";
import LikeComponent from "../Component/LikeComponent";
import Style from "./index.module.css";
import { useSelector } from "react-redux";
// import { LikeAction } from "../Redux/action";
// import { useDispatch, useSelector } from "react-redux";

export default function Liked() {
  const { data } = useSelector((state) => state.likevideoReducer);

  // const dispatch = useDispatch();
  // const fd = () => {
  //   dispatch(LikeAction(data));
  // };
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
                      src={item.image}
                      alt="portfolio img"
                    ></img>
                  </div>
                </div>
              </div>
            );
          })}

          <LikeComponent />
        </div>
      </div>
    </div>
  );
}
