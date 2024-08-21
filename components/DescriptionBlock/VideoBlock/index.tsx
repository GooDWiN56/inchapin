"use client";
import { useRef, useState } from "react";
import styles from "./style.module.scss";
import VideoFrame from "./VideoFrame";

const VideoBlock = () => {
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  const myVideo = useRef<any>(null);
  const play = () => {
    setPlayVideo(true);
    myVideo.current?.play(0);
  };
  const stop = () => {
    setPlayVideo(false);
    myVideo.current?.pause();
  };
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.text}>
          ВИДЕО о ПРОЕКТЕ
          <br />
          <span>1:25 минут</span>
        </div>
        <div className={styles.line}></div>
        <button className={styles.play} onClick={play}>
          <div className={styles.button}>
            <span>▶ play</span>
          </div>
        </button>
      </div>
      <div id="fixed" className={playVideo ? styles.video : ""}>
        <VideoFrame myRef={myVideo} play={playVideo} stop={stop} />
      </div>
    </>
  );
};

export default VideoBlock;
