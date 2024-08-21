import Select, { StylesConfig } from "react-select";
import styles from "./style.module.scss";

const colourStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#2F80ED",
    color: "#fff",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    minHeight: "auto",
    overflow: "hidden",
    padding: "5px 0",
  }),

  input: (styles) => ({ ...styles, color: "#fff", paddingLeft: "10px" }),
  placeholder: (styles) => ({
    ...styles,
    color: "#fff",
    fontSize: "13px",
    fontWeight: 400,
    letterSpacing: 1,
    paddingLeft: "10px",
  }),
  indicatorSeparator: (styles) => ({ display: "none" }),
  indicatorsContainer: (styles) => ({
    width: "10px",
    marginRight: "15px",
    background: "url(/assets/image/select.svg) no-repeat center",
    "& svg": { display: "none" },
  }),

  singleValue: (styles) => ({
    ...styles,
    color: "#fff",
    fontSize: "13px",
    fontWeight: 400,
    letterSpacing: 1,
    paddingLeft: "10px",
  }),
  menu: (styles) => ({
    ...styles,
    top: "34px",
  }),
};

const SelectBlock = () => {
  const options = [
    { value: "flat1", label: "Квартира 1" },
    { value: "flat2", label: "Квартира 2" },
    { value: "flat3", label: "Квартира 3" },
  ];
  return (
    <Select
      options={options}
      className={styles.select2}
      placeholder="Выбрать квартиру"
      styles={colourStyles}
    />
  );
};

export default SelectBlock;
