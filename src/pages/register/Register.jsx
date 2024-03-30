import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../api/auth/signup/Request";
import { Button } from "../../components/button/Button";
import { Container } from "../../components/container/Container";
import { Input } from "../../components/input/Input";
import { Layout } from "../../components/layout/Layout";
import { useSnackbar } from "../../components/snackbar/SnackBarContext";
import { validateEmail } from "../../validators/EmailValidator";
import { validatePassword } from "../../validators/PasswordValidator";
import styles from "./Register.module.css";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [company_name, setCompany_name] = useState("");

  const { openSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const COMPANY_NAME = "Enter with your company name";
  const EMAIL_TEXT = "Enter with your email";
  const PASSWORD_TEXT = "Enter with your password";
  const PASSWORD_2_TEXT = "Plase confirm your password";

  const REGISTER_LOGIN_TEXT = "Register success";
  const INVALID_EMAIL_TEXT = "Invalid email format!";
  const INVALID_PASSWORD_TEXT = "Invalid password format!";
  const INVALID_CONFIRMATION_PASSWORD_TEXT = "Invalid confirmation password!";

  const handelSubmit = async (e) => {
    switch (true) {
      case !validateEmail(email):
        openSnackbar(INVALID_EMAIL_TEXT, "error");
        break;
      case !validatePassword(password):
        openSnackbar(INVALID_PASSWORD_TEXT, "error");
        break;
      case password !== confirmPassword:
        openSnackbar(INVALID_CONFIRMATION_PASSWORD_TEXT, "error");
        break;
      default:
        e.preventDefault();
        let response = await signUp({ email, password, company_name });
        if (!response.error) {
          openSnackbar(REGISTER_LOGIN_TEXT, "success");
          navigate("/");
        } else {
          openSnackbar(response.errorText, "error");
        }
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
