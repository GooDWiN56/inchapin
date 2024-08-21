import Image from "next/image";
import styles from "./style.module.scss";
import VideoBlock from "./VideoBlock";

const DescriptionBlock = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <h5>о проекте</h5>
        <div className={styles.image}>
          <Image
            src="/assets/image/description.png"
            alt="Inchapin"
            fill
            priority
          />
          <div className={styles.arrow}>
            <Image src="/assets/image/arrow.svg" alt="arrow" fill />
          </div>
        </div>
      </div>
      <div className={styles.desc}>
        <h3>
          уютное и безопасное пространство для счастливой,
          <br />
          <span className={styles.primary}>спокойной и размеренной жизни</span>
        </h3>
        <div className={styles.about}>
          <span className={styles.primary}>
            Квартиры от 65 до 356 м2 с чистовой отделкой,
          </span>
          <br />
          балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой
          территориИ.
        </div>
        <VideoBlock />
      </div>
    </div>
  );
};

export default DescriptionBlock;
