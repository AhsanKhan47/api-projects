import React from "react";
import Image from "next/image";
import style from "./style/header.module.scss";

export default function loading() {
  return (
    <div className={style.loaderContainter}>
      <Image
        className={style.loader}
        src="/erenGif.gif"
        alt="logo"
        width={150}
        height={150}
      ></Image>
    </div>
  );
}
