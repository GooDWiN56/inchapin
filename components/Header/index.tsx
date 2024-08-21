import { FC } from "react";
import BurgerMenu from "./BurgerMune";
import Logo from "./Logo";
import styles from "./style.module.scss";
import Link from "next/link";
import SelectBlock from "./SelectBlock";
interface IHeader {
  open: () => void;
}

const Header: FC<IHeader> = ({ open }) => {
  return (
    <header id="header" className={styles.head}>
      <div className={styles.wrap}>
        <div style={{ marginRight: "25px" }}>
          <BurgerMenu />
        </div>
        <div className={styles.select}>
          <SelectBlock />
        </div>
        <Logo />
        <div className={styles.contacts}>
          <div className={styles.phone}>
            <Link href="tel:+74955272121">+7 495 527 21 21</Link>
          </div>
          <div className={styles.call}>
            <button onClick={open}>
              <span>ЗАКАЗАТЬ ЗВОНОК</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
