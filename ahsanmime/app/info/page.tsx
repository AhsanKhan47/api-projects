"use client";
import Link from "next/link";
import style from "../style/info.module.scss";
export default function Info() {
  return (
    <div className={style.container}>
      {/* <h1>About me</h1> */}
    
      {/* <p>Hi, I'm a student of PIAIC</p> */}
      <section className={style.info}>
        <ul>
          <li>Name</li>
          <li>Ahsan Khan</li>
          <li>Roll No</li>
          <li>PIAIC197467</li>
          <li>Batch</li>
          <li>Batch 38</li>
          <li>City</li>
          <li>Karachi</li>
          <li>Course</li>
          <li className={style.underline}>
            <Link href={"https://www.panaverse.co/"} target="_blank">
              Certified Web 3.0 and Metaverse Developer
            </Link>
          </li>
          <li>Email</li>
          <li>ahsanraz44@gmail.com</li>
        </ul>
      </section>
    </div>
  );
}
