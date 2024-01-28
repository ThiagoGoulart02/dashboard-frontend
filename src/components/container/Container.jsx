import React from "react";
import styles from "./Container.module.css";
import { Layout } from "../layout/Layout";

export const Container = ({ children, type }) => {
  return (
    <div className={styles.container}>
      <Layout type={type}>{children}</Layout>
    </div>
  );
};
