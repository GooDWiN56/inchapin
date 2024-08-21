"use client";
import { FC, KeyboardEvent, LegacyRef, useEffect } from "react";
import styles from "./style.module.scss";
import CloseButton from "@/components/CloseButton";

interface IVideoFrame {
  myRef: LegacyRef<HTMLVideoElement> | undefined;
  play: boolean;
  stop: () => void;
}

const VideoFrame: FC<IVideoFrame> = ({ myRef, play, stop }) => {
  if (!play) return <></>;
  useEffect(() => {
    play && myRef?.current?.play();
  }, [play]);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      console.log("User pressed: ", event.key);

      if (event.key === "Escape") {
        event.preventDefault();
        stop();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);
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
