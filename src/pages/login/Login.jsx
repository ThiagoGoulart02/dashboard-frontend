import React, { useState } from "react";
import styles from "./Login.module.css";
import { Container } from "../../components/container/Container";
import { Layout } from "../../components/layout/Layout";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";

export const Login = () => {
  const [icon, setIcon] = useState("bx bx-show bx-tada-hover");
  const [type, setType] = useState("password");

  const EMAIL_TEXT = "Enter with your email";

  const handleChangeIcon = () => {
    if (icon === "bx bx-show bx-tada-hover") {
      setIcon("bx bx-hide bx-tada-hover");
      setType("");
    } else {
      setIcon("bx bx-show bx-tada-hover");
      setType("password");
    }
  };

  return (
    <Container type="center">
      <div className={styles.content}>
        <Layout type="space-evenly-column">
          <div className={styles.title}>
            <h1>Dashboard</h1>
            <h3>Sign in</h3>
          </div>
          <div className={styles.emailInput}>
            <Input placeholder={EMAIL_TEXT} type={"email"} />
          </div>
          <div className={styles.passwordInput}>
            <Input placeholder={"Enter with your password"} type={type} />
            <i className={icon} onClick={handleChangeIcon} />
          </div>
          <div className={styles.buttons}>
            <div className={styles.buttonSignIn}>
              <Button label={"Sign up"} />
            </div>
            <div className={styles.buttonSignUp}>
              <Button label={"Sign in"} />
            </div>
          </div>
          <div className={styles.forgotPassword}>
            <p>Forgot your password?</p>
          </div>
        </Layout>
      </div>
    </Container>
  );
};
