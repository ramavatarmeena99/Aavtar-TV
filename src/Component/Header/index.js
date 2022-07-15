import React from "react";
import Style from "./index.module.css";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { websiteName } from "../../Constant";
import { Link } from "react-router-dom";
const Logo = require("../../Img/logo.png");
export default function Header() {
  return (
    <div className={Style.header}>
      <div className={Style.logo}>
        <img src={Logo} alt="avatar logo" />
        <div className={Style.forTextDecoration}>
          <Link to="/videoList">
            <p className={Style.devNight}>{websiteName}</p>
          </Link>
        </div>
      </div>
      <div className={Style.inputField}>
        <div className={Style.forRedus}>
          <div className={Style.forInputField}>
            <input placeholder="search" type="text"></input>
          </div>
          <div className={Style.searchIcon}>
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
