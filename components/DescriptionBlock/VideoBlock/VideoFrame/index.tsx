"use client";
import { FC, KeyboardEvent, LegacyRef, useEffect } from "react";
import styles from "./style.module.scss";
import CloseButton from "@/components/CloseButton";

interface IVideoFrame {
  myRef: any;
  play: boolean;
  stop: () => void;
}

const VideoFrame: FC<IVideoFrame> = ({ myRef, play, stop }) => {
  useEffect(() => {
    // other code
    play && myRef?.current?.play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play]);

  useEffect(() => {
    // other code
    const keyDownHandler = (event: any) => {
      if (event.key === "Escape") {
        event.preventDefault();
        stop();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!play) return <></>;
  return (
    <div className={play ? styles.wrap : styles.nodisplay}>
      <video
        ref={myRef}
        controls
        src="https://api.5-ve.ru/upload/video/Mantera_promo_1920.mp4"
      >
        <source src="https://api.5-ve.ru/upload/video/Mantera_promo_1920.mp4" />
      </video>
      <CloseButton close={stop} />
    </div>
  );
};

export default VideoFrame;
