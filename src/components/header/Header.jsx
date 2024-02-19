import React from "react";
import { Layout } from "../layout/Layout";
import { Input } from "./../input/Input";
import styles from "./Header.module.css";

const Header = ({ companyName }) => {
  return (
    <div className={styles.container}>
      <Layout type="space-between">
        <div className={styles.title}>
          <div className={styles.dashboardTitle}>
            <h1>Dash</h1>
            <h1 className={styles.secondTitle}>board</h1>
          </div>
          <div className={styles.companyNameTitle}>
            <h1>{companyName}</h1>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.searchInput}>
            <Input placeholder={"Search for something..."} />
          </div>
        </div>
        <a href="/home" className={styles.icon}>
          <i className={"fas bx bxs-cog bx-spin-hover"} />
        </a>
      </Layout>
    </div>
  );
};

export default Header;
