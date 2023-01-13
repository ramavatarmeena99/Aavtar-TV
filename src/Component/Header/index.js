import React, { useState } from "react";
import Style from "./index.module.css";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { websiteName } from "../../Constant";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../../key";


const Logo = require("../../Img/logo.png");
export default function Header() {


  const [searchQuery, setSearchQuery] = useState("most");
  const findVideo = (e) => {

    setSearchQuery(e.target.value);
   
  };
  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchVideos("save");
    }
  };


  const searchVideos = (value) => {
   
    if (value === "save") {
      //
    }

    axios({
      method: "GET",
      url:
        value === "start"
          ? `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=100&key=${API_KEY}`
          : `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&maxResults=48&key=${API_KEY}`,

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        alert("working in progress")


      console.log(res.data.items)

      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
  return (
    <div className={Style.header}>
      <div className={Style.logo}>
        <img className={Style.avtarLogo} src={Logo} alt="avatar logo" />

        <Link className={Style.forTextDecoration} to="/videoList">
          <p className={Style.devNight}>{websiteName}</p>
        </Link>
      </div>
      <div className={Style.inputField}>
        <div className={Style.forRedus}>
          <div className={Style.forInputField}>
            <input onClick={findVideo}                 onKeyDown={onKeyPress}
 placeholder="search" type="text"></input>
          </div>
          <div onClick={searchVideos} className={Style.searchIcon}>
            <AiOutlineSearch className={Style.lineSearch} />
          </div>
        </div>
      </div>
      <div className={Style.userAccount}>
        <div className={Style.loginLogout}>
          <FiLogIn />
          <p>Login</p>
        </div>
      </div>
    </div>
  );
}
