// import axios from "axios";
import React, { useEffect, useState } from "react";
import { TagsTitle, YoutubeData } from "../../Data";
import Tags from "../Tags";
import Style from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { PlayListAction, WatchLaterAction } from "../../Redux/action";
import { BsThreeDotsVertical } from "react-icons/bs";
import MainVideoContainer from "../MaineVideoContainer";

export default function VideoContainer() {
  const { playlistdata, watchlaterdata } = useSelector(
    (state) => state.videoReducer
  );

  const tagIndex = parseInt(localStorage.getItem("tagIndex"));
  const dispatch = useDispatch();

  const [selectedTag, setSelectedTag] = useState(tagIndex || 1);
  const [isClose, setIsClose] = useState("");
  const [isRemovePlaylist, setisRemovePlaylist] = useState(true);

  const tagHandler = (item) => {
    setSelectedTag(item.id);
    localStorage.setItem("tagIndex", item.id);
  };

  const addPlayList = (video) => {
    const myPlaylist = [...playlistdata, video];
    dispatch(PlayListAction(myPlaylist));
    setisRemovePlaylist(false);
    setIsClose("");
  };
  const removeToPlaylist = (video) => {
    setisRemovePlaylist(true);
    setIsClose("");
  };
  const addWatchLater = (video) => {
    const myWatchLaterVideo = [...watchlaterdata, video];
    dispatch(WatchLaterAction(myWatchLaterVideo));
    setIsClose("");
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
              <MainVideoContainer item={video} />
              <Modal
                addPlayList={addPlayList}
                addWatchLater={addWatchLater}
                video={video}
                setIsClose={setIsClose}
                isClose={isClose}
                isRemovePlaylist={isRemovePlaylist}
                removeToPlaylist={removeToPlaylist}
              />
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

export function Modal({
  setIsClose,
  isClose,
  addPlayList,
  addWatchLater,
  video,
  isRemovePlaylist,
  removeToPlaylist,
}) {
  // TODO:::::need to smjahnanananana
  const dotsOpen = () => {
    setIsClose(video.id.videoId);
  };
  const dotsClose = () => {
    setIsClose("");
  };

  return (
    <div className={Style.dotsPosition}>
      {video.id.videoId !== isClose ? (
        <BsThreeDotsVertical onClick={dotsOpen} className={Style.dots} />
      ) : (
        <>
          <div className={Style.mainuTitle}>
            {isRemovePlaylist ? (
              <p
                onClick={() => addPlayList(video)}
                className={Style.mainuconcept}
              >
                Add to Playlist
              </p>
            ) : (
              <p
                onClick={() => removeToPlaylist(video)}
                className={Style.mainuconcept}
              >
                Remove to Playlist
              </p>
            )}

            <p
              onClick={() => addWatchLater(video)}
              className={Style.mainuconcept}
            >
              Add to watch later
            </p>

            <BsThreeDotsVertical onClick={dotsClose} className={Style.dots} />
          </div>
        </>
      )}
    </div>
  );
}
