import React from "react";
import styles from "./Input.module.css";

const Input = ({ value, onChange, type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  );
};

export default Input;
