import React from "react";
import Style from "./index.module.css";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <div className={Style.header}>
      <div className={Style.logo}>
        <p className={Style.devNight}>devNight</p>
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
