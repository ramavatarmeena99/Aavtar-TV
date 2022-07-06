import React, { useState } from "react";
import { TagsTitle } from "../../Data";
import Tags from "../Tags";
import Style from "./index.module.css";
export default function VideoContainer() {
  const tagIndex = parseInt(localStorage.getItem("tagIndex"));

  const [selectedTag, setSelectedTag] = useState(tagIndex || 1);
  const tagHandler = (item) => {
    setSelectedTag(item.id);
    localStorage.setItem("tagIndex", item.id);
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
      <div className={Style.videos}></div>
    </div>
  );
}

let activeCss = {
  backgroundColor: "#2235b6",
};
