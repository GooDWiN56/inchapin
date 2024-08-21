import { FC, LegacyRef, useState } from "react";
import styles from "./style.module.scss";
import { useIMask } from "react-imask";
interface ITextfield {
  label: string;
  name: string;
  type: string;
  phone?: boolean;
}

const Textfield: FC<ITextfield> = ({ label, name, type, phone = false }) => {
  const [opts, setOpts] = useState({ mask: "+{7} (000) 000-00-00" });
  const { ref } = useIMask(
    opts /* optional {
    onAccept,
    onComplete,
    ref,
    defaultValue,
    defaultUnmaskedValue,
    defaultTypedValue,
  } */
  );
  return (
    <div className={`${styles.wrap} ${styles.field}`}>
      {phone ? (
        <input
          type={type}
          className={styles.input}
          placeholder={label}
          name={name}
          id={name}
          ref={ref as LegacyRef<HTMLInputElement>}
        />
      ) : (
        <input
          type={type}
          className={styles.input}
          placeholder={label}
          name={name}
          id={name}
        />
      )}
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default Textfield;
