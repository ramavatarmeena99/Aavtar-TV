import React, { useState } from "react";
import { TagsTitle } from "../../Data";
import Tags from "../Tags";
import Style from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { LikeAction } from "../../Redux/action";
import Imgfirst from "../../Img/imgfirst.jpg";
import Imgsecond from "../../Img/imgsecond.jpg";
import Imgthird from "../../Img/imgthird.jpg";
const allData = [
  {
    image: Imgfirst,
  },
  {
    image: Imgsecond,
  },
  {
    image: Imgthird,
  },
];
export default function VideoContainer() {
  const { data } = useSelector((state) => state.likevideoReducer);

  const tagIndex = parseInt(localStorage.getItem("tagIndex"));
  const dispatch = useDispatch();

  const [selectedTag, setSelectedTag] = useState(tagIndex || 1);
  const tagHandler = (item) => {
    setSelectedTag(item.id);
    localStorage.setItem("tagIndex", item.id);
  };

  const imgClick = (item) => {
    const myLiked = [...data, item];
    dispatch(LikeAction(myLiked));
    alert(item.name);
  };
  return (
    <div className={Style.videoContainer}>
      <div className={Style.tags}>
        {TagsTitle.map((item, index) => {
          const isActiveTag = selectedTag === item.id;
          return (
            <div
              onClick={() => tagHandler(item)}
              key={index}
              style={isActiveTag ? activeCss : {}}
              className={Style.tagColor}
            >
              <React.Fragment key={index}>
                <Tags tagTitle={item.tagTitle} />
              </React.Fragment>
            </div>
          );
        })}
      </div>
      <div className={Style.videos}>
        {/* <div className={Style.imgDiv}>
          <img
            onClick={() => imgClick()}
            className={Style.imgFirst}
            src={Imgfirst}
            alt="portfolio img"
          ></img>
        </div> */}
        {allData.map((item) => {
          return (
            <div
              style={{
                width: "250px",
                height: "250px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backgroundColor: "red",
                marginBottom: 20,
              }}
            >
              <div className={Style.contactMap}>
                <div className={Style.srNumber}>
                  <img
                    className={Style.imgFirst}
                    src={item.image}
                    alt="portfolio img"
                  ></img>

                  <button onClick={() => imgClick(item)}>LIKED</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

let activeCss = {
  backgroundColor: "#2235b6",
};
