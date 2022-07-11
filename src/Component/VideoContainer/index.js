import axios from "axios";
import React, { useEffect, useState } from "react";
import { TagsTitle } from "../../Data";
import Tags from "../Tags";
import Style from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { LikeAction } from "../../Redux/action";

export default function VideoContainer() {
  const [mostPopularVideos, setMostPopularVideos] = useState([]);

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

  const getAllContestData = async () => {
    await axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=songs&maxResults=48&key=AIzaSyCcG_elmQt2JmQ-HuYobx8UcgyWesNOhOA",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then(function (res) {
        setMostPopularVideos(res.data.items);
      })
      .catch(function (error) {});
  };

  useEffect(() => {
    getAllContestData();
  }, []);
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
        {mostPopularVideos?.map((video, index) => {
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
