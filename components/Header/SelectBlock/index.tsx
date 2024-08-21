import { ColourOption, colourOptions } from "../data";
import Select, { StylesConfig } from "react-select";
import styles from "./style.module.scss";

const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#2F80ED",
    color: "#fff",
    borderRadius: "30px",
    border: "none",
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

  singleValue: (styles, { data }) => ({
    ...styles,
    color: "#fff",
    fontSize: "13px",
    fontWeight: 400,
    letterSpacing: 1,
    paddingLeft: "10px",
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
      className={styles.select}
      placeholder="Выбрать квартиру"
      styles={colourStyles}
    />
  );
};

export default SelectBlock;
