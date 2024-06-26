import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/button/Button";
import { Container } from "../../../components/container/Container";
import { Input } from "../../../components/input/Input";
import { Layout } from "../../../components/layout/Layout";
import styles from "./EmailConfirmation.module.css";

export const EmailConfirmation = () => {
  const EMAIL_TEXT = "Describe your email";

  return (
    <Container type="center">
      <div className={styles.content}>
        <Layout type="space-between-column">
          <div className={styles.title}>
            <h1>Dashboard</h1>
            <h3>Forgot password</h3>
          </div>
          <div className={styles.emailInput}>
            <Input placeholder={EMAIL_TEXT} type={"email"} />
          </div>
          <div className={styles.buttons}>
            <div className={styles.buttonBack}>
              <Link to={"/login"}>
                <Button>Back</Button>
              </Link>
            </div>
            <div className={styles.buttonNext}>
              <Button>Next</Button>
            </div>
          </div>
        </Layout>
      </div>
    </Container>
  );
};
