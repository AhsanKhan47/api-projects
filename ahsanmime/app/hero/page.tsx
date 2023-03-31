import React from "react";
import style from "../style/hero.module.scss";
import Image from "next/image";
export default function Hero() {
  return (
    <div className={style.container}>
      <img className={style.hero} src="/1.png" alt="logo" />
    </div>
  );
}
