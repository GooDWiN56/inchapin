"use client";
import { use, useEffect, useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { config } from "process";

const Banner = () => {
  const [headH, setHeadH] = useState<number | undefined>(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", function () {
      setWidth(window.innerWidth);
    });
  }, [width]);

  useEffect(() => {
    setHeadH(document.getElementById("header")?.clientHeight);
  }, [width]);
  return (
    <div style={{ paddingTop: `${headH}px` }} className={styles.wrap}>
      <div className={styles.flex}>
        <div className={styles.image}>
          <Image src="/assets/image/banner.png" alt="Inchapin" fill />
        </div>
        <div className={styles.desc}>
          <div className={styles.slogan}>
            Дом бизнес-класса <br />
            для ценителей роскоши
          </div>
          <div className={styles.name}>
            <Image src="/assets/image/name.svg" alt="Inchapin" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
