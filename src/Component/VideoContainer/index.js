// import axios from "axios";
import React, { useEffect, useState } from "react";
import { TagsTitle, YoutubeData } from "../../Data";
import Tags from "../Tags";
import Style from "./index.module.css";
import { useDispatch } from "react-redux";
import { LikeAction } from "../../Redux/action";
import { BsThreeDotsVertical } from "react-icons/bs";
// import firstImg from "../../Img/imgfirst.jpg";
// import secondImg from "../../Img/imgsecond.jpg";
// import thirdImg from "../../Img/imgthird.jpg";

export default function VideoContainer() {
  // const mydata = [
  //   { videoImg: firstImg },
  //   { videoImg: secondImg },
  //   { videoImg: thirdImg },
  // ];
  // const [mostPopularVideos, setMostPopularVideos] = useState([]);
  const [isClose, setIsClose] = useState(true);
  // const { data } = useSelector((state) => state.likevideoReducer);

  const tagIndex = parseInt(localStorage.getItem("tagIndex"));
  const dispatch = useDispatch();

  const [selectedTag, setSelectedTag] = useState(tagIndex || 1);
  const tagHandler = (item) => {
    setSelectedTag(item.id);
    localStorage.setItem("tagIndex", item.id);
  };

  const addLike = (item) => {
    const myLiked = [...YoutubeData, item];
    dispatch(LikeAction(myLiked));
    console.log(YoutubeData);
    // alert(JSON.stringify(data));
  };

  // const getAllData = async () => {
  //   await axios
  //     .get(
  //       "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=songs&maxResults=48&key=AIzaSyCcG_elmQt2JmQ-HuYobx8UcgyWesNOhOA",
  //       {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json; charset=UTF-8",
  //         },
  //       }
  //     )
  //     .then(function (res) {
  //       setMostPopularVideos(res.data.items);
  //     })
  //     .catch(function (error) {});
  // };
  const dotsOpen = () => {
    setIsClose(false);
  };
  const dotsClose = () => {
    setIsClose(true);
  };
  // const addLike = () => {};
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
                      <p onClick={addLike} className={Style.mainuconcept}>
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
