import React from "react";
import { Button } from "../../components/button/Button";
import { Container } from "../../components/container/Container";
import { Input } from "../../components/input/Input";
import { Layout } from "../../components/layout/Layout";
import styles from "./Register.module.css";

export const Register = () => {
  const NAME_TEXT = "Enter with your name";
  const EMAIL_TEXT = "Enter with your email";
  const PASSWORD_TEXT = "Enter with your password";
  const PASSWORD_2_TEXT = "Plase confirm your password";

  return (
    <Container type="center">
      <div className={styles.content}>
        <Layout type="space-evenly-column">
          <div className={styles.title}>
            <h1>Dashboard</h1>
            <h3>Sign up</h3>
          </div>
          <div className={styles.nameInput}>
            <Input placeholder={NAME_TEXT} />
          </div>
          <div className={styles.emailInput}>
            <Input placeholder={EMAIL_TEXT} />
          </div>
          <div className={styles.passwordInput}>
            <Input placeholder={PASSWORD_TEXT} />
          </div>
          <div className={styles.passwordConfirmationInput}>
            <Input placeholder={PASSWORD_2_TEXT} />
          </div>
          <div className={styles.buttons}>
            <div className={styles.backButton}>
              <Button label="Back" />
            </div>
            <div className={styles.signUpButton}>
              <Button label="Sign up" />
            </div>
          </div>
        </Layout>
      </div>
    </Container>
  );
};
