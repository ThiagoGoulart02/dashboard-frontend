import React from "react";
import styles from "./Button.module.css";

export const Button = (props) => {
  const { children, ...rest } = props;
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};
