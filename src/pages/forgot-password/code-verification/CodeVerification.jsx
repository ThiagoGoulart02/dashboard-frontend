import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/button/Button";
import { Input } from "../../../components/input/Input";
import { Layout } from "../../../components/layout/Layout";
import { Container } from "./../../../components/container/Container";
import styles from "./CodeVerification.module.css";

export const CodeVerification = () => {
  const CODE_TEXT = "Paste the verification code here";

  return (
    <Container type="center">
      <div className={styles.content}>
        <Layout type="space-between-column">
          <div className={styles.title}>
            <h1>Dashboard</h1>
            <h3>Forgot password</h3>
          </div>
          <div className={styles.codeInput}>
            <Input placeholder={CODE_TEXT} type={"number"} />
          </div>
          <div className={styles.buttons}>
            <div className={styles.buttonBack}>
              <Link to={"/email-confirmation"}>
                <Button label={"Back"} />
              </Link>
            </div>
            <div className={styles.buttonNext}>
              <Button label={"Next"} />
            </div>
          </div>
        </Layout>
      </div>
    </Container>
  );
};
