import React from "react";
import styles from "./Layout.module.css";

export const Layout = ({ children, type }) => {
  return <div className={styles[type]}>{children}</div>;
};
