import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../api/auth/signup/Request";
import { Button } from "../../components/button/Button";
import { Container } from "../../components/container/Container";
import { Input } from "../../components/input/Input";
import { Layout } from "../../components/layout/Layout";
import styles from "./Register.module.css";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [company_name, setCompany_name] = useState("");

  const COMPANY_NAME = "Enter with your company name";
  const EMAIL_TEXT = "Enter with your email";
  const PASSWORD_TEXT = "Enter with your password";
  const PASSWORD_2_TEXT = "Plase confirm your password";

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (password == confirmPassword) {
      let response = await signUp({ email, password, company_name });
    }
  };

  return (
    <Container type="center">
      <div className={styles.content}>
        <Layout type="space-between-column">
          <div className={styles.title}>
            <h1>Dashboard</h1>
            <h3>Sign up</h3>
          </div>
          <div className={styles.nameInput}>
            <Input
              placeholder={COMPANY_NAME}
              onChange={(e) => setCompany_name(e.target.value)}
            />
          </div>
          <div className={styles.emailInput}>
            <Input
              placeholder={EMAIL_TEXT}
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.passwordInput}>
            <Input
              placeholder={PASSWORD_TEXT}
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.passwordConfirmationInput}>
            <Input
              placeholder={PASSWORD_2_TEXT}
              type={"password"}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className={styles.buttons}>
            <div className={styles.backButton}>
              <Link to={"/login"}>
                <Button>Back</Button>
              </Link>
            </div>
            <div className={styles.signUpButton}>
              <Button onClick={handelSubmit}>Sign up</Button>
            </div>
          </div>
        </Layout>
      </div>
    </Container>
  );
};
