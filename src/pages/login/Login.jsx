import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Container } from "../../components/container/Container";
import { Input } from "../../components/input/Input";
import { Layout } from "../../components/layout/Layout";
import styles from "./Login.module.css";

export const Login = () => {
  const [icon, setIcon] = useState("bx bx-show bx-tada-hover");
  const [type, setType] = useState("password");

  const EMAIL_TEXT = "Enter with your email";
  const PASSWORD_TEXT = "Enter with your password";
  const FORGOTPASSWORD_TEXT = "Forgot your password?";

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
        <Layout type="space-between-column">
          <div className={styles.title}>
            <h1>Dashboard</h1>
            <h3>Sign in</h3>
          </div>
          <div className={styles.emailInput}>
            <Input placeholder={EMAIL_TEXT} type={"email"} />
          </div>
          <div className={styles.passwordInput}>
            <Input placeholder={PASSWORD_TEXT} type={type} />
            <i className={icon} onClick={handleChangeIcon} />
          </div>
          <div className={styles.buttons}>
            <div className={styles.buttonSignIn}>
              <Link to={"/register"}>
                <Button label={"Sign up"} />
              </Link>
            </div>
            <div className={styles.buttonSignUp}>
              <Button label={"Sign in"} />
            </div>
          </div>
          <div className={styles.forgotPassword}>
            <Link to={"/email-confirmation"}>
              <p>{FORGOTPASSWORD_TEXT}</p>
            </Link>
          </div>
        </Layout>
      </div>
    </Container>
  );
};
