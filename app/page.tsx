"use client";
import styles from "./page.module.scss";
import Banner from "@/components/Banner";
import DescriptionBlock from "@/components/DescriptionBlock";
import FormDialog from "@/components/FormDialog";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const open = () => {
    setOpenForm(true);
  };
  const close = () => {
    setOpenForm(false);
  };
  return (
    <main className={styles.main}>
      <Header open={open} />
      <Banner />
      <DescriptionBlock />
      <div id="form" className={openForm ? styles.openform : styles.noopen}>
        <FormDialog open={openForm} close={close} />
      </div>
    </main>
  );
}
