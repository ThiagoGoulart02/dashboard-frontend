import React, { useState } from "react";
import { Button } from "../../../components/button/Button";
import { Container } from "../../../components/container/Container";
import { Input } from "../../../components/input/Input";
import { Layout } from "../../../components/layout/Layout";
import styles from "./NewPassword.module.css";

export const NewPassword = () => {
  const [icon, setIcon] = useState("bx bx-show bx-tada-hover");
  const [type, setType] = useState("password");
  const PASSWORD_TEXT = "Describe your new password";
  const PASSWORD_2_TEXT = "Please confirm your new password";

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
            <h3>Forgot password</h3>
          </div>
          <div className={styles.passwordInput}>
            <Input placeholder={PASSWORD_TEXT} type={type} />
            <i className={icon} onClick={handleChangeIcon} />
          </div>
          <div className={styles.passwordConfirmationInput}>
            <Input placeholder={PASSWORD_2_TEXT} type={"password"} />
          </div>
          <div className={styles.buttons}>
            <div className={styles.buttonConfirm}>
              <Button label={"Cancel"} />
            </div>
            <div className={styles.buttonCancel}>
              <Button label={"Confirm"} />
            </div>
          </div>
        </Layout>
      </div>
    </Container>
  );
};
