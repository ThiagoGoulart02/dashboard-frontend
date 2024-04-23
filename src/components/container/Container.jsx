import React from "react";
import { Layout } from "../layout/Layout";
import styles from "./Container.module.css";

export const Container = ({ children, type }) => {
  return (
    <div className={styles.container}>
      <Layout type={type}>{children}</Layout>
    </div>
  );
};
