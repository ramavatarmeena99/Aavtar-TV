// import axios from "axios";
import React, { useEffect, useState } from "react";
import { TagsTitle, YoutubeData } from "../../Data";
import Tags from "../Tags";
import Style from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { LikeAction } from "../../Redux/action";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function VideoContainer() {
  const [isClose, setIsClose] = useState(true);
  const { data } = useSelector((state) => state.likevideoReducer);

  const tagIndex = parseInt(localStorage.getItem("tagIndex"));
  const dispatch = useDispatch();

  const [selectedTag, setSelectedTag] = useState(tagIndex || 1);
  const tagHandler = (item) => {
    setSelectedTag(item.id);
    localStorage.setItem("tagIndex", item.id);
  };

  const addLike = (video) => {
    const myLiked = [...data, video];
    dispatch(LikeAction(myLiked));
    console.log(addLike);
  };

  const dotsOpen = () => {
    setIsClose(false);
  };
  const dotsClose = () => {
    setIsClose(true);
  };

  useEffect(() => {}, []);
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
        {YoutubeData?.map((video, index) => {
          return (
            <div className={Style.videoInfo} key={index}>
              <div className={Style.videoPlayer}>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className={Style.videoImage}
                  // we need whole thing about video so passing video
                />
              </div>

              <div className={Style.channelName}>
                <p>{video.snippet.title}</p>
              </div>
              <div className={Style.dotsPosition}>
                {isClose ? (
                  <BsThreeDotsVertical
                    onClick={dotsOpen}
                    className={Style.dots}
                  />
                ) : (
                  <>
                    <div className={Style.mainuTitle}>
                      <p
                        onClick={() => addLike(video)}
                        className={Style.mainuconcept}
                      >
                        Add to Playlist
                      </p>

                      <p className={Style.mainuconcept}>Add to watch later</p>

                      <BsThreeDotsVertical
                        onClick={dotsClose}
                        className={Style.dots}
                      />
                    </div>
                  </>
                )}
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
