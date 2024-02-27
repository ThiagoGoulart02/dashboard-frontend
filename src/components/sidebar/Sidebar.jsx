import React from "react";
import { Layout } from "../layout/Layout";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Layout type="space-between-column">
          <div className={styles.listItems}>
            <li className={styles.item}>
              <a href="/home">
                <i className={"fas bx bxs-home bx-tada-hover"} />
                <span className={styles.navItem}>Home</span>
              </a>
            </li>
            <li className={styles.item}>
              <a href="/customers">
                <i className={"fas bx bxs-group bx-tada-hover"} />
                <span className={styles.navItem}>Clients</span>
              </a>
            </li>
            <li className={styles.item}>
              <a href="/stock">
                <i className={"fas bx bx-archive bx-tada-hover"} />
                <span className={styles.navItem}>Stock</span>
              </a>
            </li>
            <li className={styles.item}>
              <a href="/orders">
                <i className={"fas bx bx-list-ol bx-tada-hover"} />
                <span className={styles.navItem}>Orders</span>
              </a>
            </li>
            <li className={styles.item}>
              <a href="/finances">
                <i className={"fas bx bx-wallet bx-tada-hover"} />
                <span className={styles.navItem}>Finances</span>
              </a>
            </li>
            <li className={styles.item}>
              <a href="/calendar">
                <i className={"fas bx bx-calendar bx-tada-hover"} />
                <span className={styles.navItem}>Calendar</span>
              </a>
            </li>
            <li className={styles.item}>
              <a href="/settings">
                <i className={"fas bx bx-cog bx-tada-hover"} />
                <span className={styles.navItem}>Settings</span>
              </a>
            </li>
            <li className={styles.item}>
              <a href="/">
                <i className={"fas bx bx-export bx-tada-hover"} />
                <span className={styles.navItem}>Logout</span>
              </a>
            </li>
          </div>
        </Layout>
      </div>
    </Layout>
  );
};

export default Sidebar;
