// import axios from "axios";
import React, { useState } from "react";
import { YoutubeData } from "../../Data";

import Style from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { PlayListAction, WatchLaterAction } from "../../Redux/action";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";

import { FaRegSave } from "react-icons/fa";

import MainVideoContainer from "../MaineVideoContainer";

export default function VideoContainer() {
  const { playlistdata, watchlaterdata } = useSelector(
    (state) => state.videoReducer
  );

  // const tagIndex = parseInt(localStorage.getItem("tagIndex"));
  const dispatch = useDispatch();

  // const [selectedTag, setSelectedTag] = useState(tagIndex || 1);
  const [isClose, setIsClose] = useState("");
  const [isRemovePlaylist, setisRemovePlaylist] = useState(true);
  const [isRemoveWatchLater, setIsRemoveWatchLater] = useState(true);

  // const tagHandler = (item) => {
  //   setSelectedTag(item.id);
  //   localStorage.setItem("tagIndex", item.id);
  // };

  const addPlayList = (item) => {
    const myPlaylist = [...playlistdata, item];
    dispatch(PlayListAction(myPlaylist));
    setisRemovePlaylist(true);
    setIsClose("");
  };
  const removeToPlaylist = (item) => {
    setisRemovePlaylist(false);
    setIsClose("");
    let remainigPlaylistData = playlistdata.filter(
      (o) => o.id.videoId !== item.id.videoId
    );
    dispatch(PlayListAction(remainigPlaylistData));
  };
  const removeToWatchLater = (item) => {
    setIsRemoveWatchLater(false);
    setIsClose("");
    let remainigWatchlaterdata = watchlaterdata.filter(
      (o) => o.id.videoId !== item.id.videoId
    );
    dispatch(WatchLaterAction(remainigWatchlaterdata));
  };
  const addWatchLater = (item) => {
    const myWatchLaterVideo = [...watchlaterdata, item];
    dispatch(WatchLaterAction(myWatchLaterVideo));
    setIsClose("");
  };

  return (
    <div className={Style.videoContainer}>
      {/* <div className={Style.tags}>
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
      </div> */}
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
                isRemoveWatchLater={isRemoveWatchLater}
                removeToPlaylist={removeToPlaylist}
                removeToWatchLater={removeToWatchLater}
                setisRemovePlaylist={setisRemovePlaylist}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// let activeCss = {
//   backgroundColor: "#2235b6",
// };

export function Modal({
  setIsClose,
  isClose,
  addPlayList,
  addWatchLater,
  video,
  removeToPlaylist,
  removeToWatchLater,
}) {
  const { playlistdata, watchlaterdata } = useSelector(
    (state) => state.videoReducer
  );

  const dotsOpen = () => {
    setIsClose(video.id.videoId);
  };

  const isAlreadyAddedInPlaylist = () => {
    let isRemovePlaylist = playlistdata.filter(
      (o) => o.id.videoId === video.id.videoId
    )?.length;

    if (isRemovePlaylist) {
      return true;
    }

    return false;
  };
  const isAlreadyAddedInWatchLater = () => {
    let isRemoveWatchLater = watchlaterdata.filter(
      (o) => o.id.videoId === video.id.videoId
    )?.length;
    if (isRemoveWatchLater) {
      return true;
    }
    return false;
  };
  return (
    <div className={Style.dotsPosition}>
      {video.id.videoId !== isClose ? (
        <BsThreeDotsVertical onClick={dotsOpen} className={Style.dots} />
      ) : (
        <>
          <div className={Style.mainuTitle}>
            {isAlreadyAddedInPlaylist() ? (
              <div
                onClick={() => removeToPlaylist(video)}
                className={Style.removeToVideo}
              >
                <FaRegSave className={Style.saveIconForRemove} />
                <p className={Style.removeTo}>Remove to Playlist</p>
              </div>
            ) : (
              <div
                onClick={() => addPlayList(video)}
                className={Style.addToVideo}
              >
                <FaRegSave className={Style.saveIcon} />

                <p className={Style.mainuconcept}>Add to Playlist</p>
              </div>
            )}

            {isAlreadyAddedInWatchLater() ? (
              <div
                onClick={() => removeToWatchLater(video)}
                className={Style.removeToVideo}
              >
                <MdOutlineWatchLater
                  className={Style.watchLaterIconForRemove}
                />

                <p className={Style.removeTo}>Remove to watch later</p>
              </div>
            ) : (
              <div
                onClick={() => addWatchLater(video)}
                className={Style.addToVideo}
              >
                <MdOutlineWatchLater className={Style.watchLaterIcon} />
                <p className={Style.mainuconcept}>Add to watch later</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
