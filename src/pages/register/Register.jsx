import React from "react";
import { Button } from "../../components/button/Button";
import { Container } from "../../components/container/Container";
import { Input } from "../../components/input/Input";
import { Layout } from "../../components/layout/Layout";
import styles from "./Register.module.css";

export const Register = () => {
  return (
    <Container type="center">
      <div className={styles.content}>
        <Layout type="space-evenly-column">
          <div className={styles.title}>
            <h1>Dashboard</h1>
            <h3>Sign up</h3>
          </div>
          <div className={styles.nameInput}>
            <Input placeholder="Enter with your name" />
          </div>
          <div className={styles.emailInput}>
            <Input placeholder="Enter with your email" />
          </div>
          <div className={styles.passwordInput}>
            <Input placeholder="Enter with your password" />
          </div>
          <div className={styles.passwordConfirmationInput}>
            <Input placeholder="Confirm your password" />
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
