"use client";
import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import style from "./style.module.scss";

const CustomScrollbar = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useEffect(() => {
    // other code
    if (typeof document === "object") {
      const element = document.getElementById("scroll");
      const fixed = document.getElementById("fixed");
      const head = document.getElementById("header");
      const form = document.getElementById("form");
      let scrollbar: any = null;
      if (element) {
        scrollbar = Scrollbar.init(element);
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="scroll" className={style.wrap}>
      {children}
    </div>
  );
};

export default CustomScrollbar;
