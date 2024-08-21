import Image from "next/image";
import styles from "./style.module.scss";
import Link from "next/link";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <Image src="./assets/logo.svg" alt="Inchapin" fill priority />
      </Link>
    </div>
  );
};

export default Logo;
