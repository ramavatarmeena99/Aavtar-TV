import React from "react";
import Header from "../Component/Header";
import MaineBody from "../Component/MainBody";
import Style from "./index.module.css";
export default function HomePage() {
  return (
    <>
      <Header />
      <div className={Style.maineBody}>
        <MaineBody />
      </div>
    </>
  );
}
