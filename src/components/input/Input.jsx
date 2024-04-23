import React from "react";
import styles from "./Input.module.css";

export const Input = (props) => {
  const { children, ...rest } = props;
  return (
    <input className={styles.input} {...rest}>
      {children}
    </input>
  );
};