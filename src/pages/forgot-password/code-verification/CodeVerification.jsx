import React from "react";
import { Button } from "../../../components/button/Button";
import { Input } from "../../../components/input/Input";
import { Layout } from "../../../components/layout/Layout";
import { Container } from "./../../../components/container/Container";
import styles from "./CodeVerification.module.css";

const CodeVerification = () => {
  const CODE_TEXT = "Paste the verification code here";

  return (
    <Container type="center">
      <div className={styles.content}>
        <Layout type="space-evenly-column">
          <div className={styles.title}>
            <h1>Dashboard</h1>
            <h3>Forgot password</h3>
          </div>
          <div className={styles.codeInput}>
            <Input placeholder={CODE_TEXT} type={"number"} />
          </div>
          <div className={styles.buttons}>
            <div className={styles.buttonBack}>
              <Button label={"Back"} />
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

export default CodeVerification;
