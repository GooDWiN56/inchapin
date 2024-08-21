import styles from "./style.module.scss";

const BurgerMenu = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.burger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.menu}>меню</div>
    </div>
  );
};

export default BurgerMenu;
