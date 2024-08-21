"use client";
import { FC } from "react";
import styles from "./style.module.scss";
interface ICloseButton {
  close: () => void;
}
const CloseButton: FC<ICloseButton> = ({ close }) => {
  return <button className={styles.close} onClick={close}></button>;
};

export default CloseButton;
