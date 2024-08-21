"use client";
import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import style from "./style.module.scss";

const CustomScrollbar = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  let scrollbar: any = null;

  useEffect(() => {
    const element = document.getElementById("scroll");
    const fixed = document.getElementById("fixed");
    const head = document.getElementById("header");
    const form = document.getElementById("form");
    if (element) {
      scrollbar = Scrollbar.init(element, { syncCallbacks: true });
    }
    if (head) {
      scrollbar.addListener(({ offset }: any) => {
        head.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0px)`;
      });
    }
    if (fixed) {
      scrollbar.addListener(({ offset }: any) => {
        fixed.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0px)`;
      });
    }
    if (form) {
      scrollbar.addListener(({ offset }: any) => {
        form.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0px)`;
      });
    }
  }, []);

  return (
    <div id="scroll" className={style.wrap}>
      {children}
    </div>
  );
};

export default CustomScrollbar;
