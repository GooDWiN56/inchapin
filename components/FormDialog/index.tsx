"use client";
import Link from "next/link";
import CloseButton from "../CloseButton";
import styles from "./style.module.scss";
import Textfield from "./Textfield";
import { FC, useEffect, useState } from "react";

interface IFormDialog {
  open: boolean;
  close: () => void;
}

const FormDialog: FC<IFormDialog> = ({ open, close }) => {
  useEffect(() => {
    // other code
    const keyDownHandler = (event: KeyboardEvent) => {
      console.log("User pressed: ", event.key);

      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!open) return <></>;
  return (
    <div className={open ? styles.wrap : styles.noopen}>
      <CloseButton close={close} />
      <form className={styles.form}>
        <h1>ЗАКАЗАТЬ ЗВОНОК</h1>
        <Textfield label={"Ваше имя"} name={"name"} type={"text"} />
        <Textfield label={"Телефон"} name={"phone"} type={"tel"} phone={true} />
        <Textfield label={"Ваше имя"} name={"email"} type={"email"} />
        <p className={styles.approv}>
          Нажимая на кнопку «Отправить», вы ознакомлены
          <br />и соглашаетесь с{" "}
          <Link href="/">политикой обработки персональных данных</Link>
        </p>
        <button className={styles.button}>ОТПРАВИТЬ</button>
      </form>
    </div>
  );
};

export default FormDialog;
