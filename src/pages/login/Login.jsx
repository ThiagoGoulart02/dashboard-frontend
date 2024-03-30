import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../api/auth/signin/Request";
import { Button } from "../../components/button/Button";
import { Container } from "../../components/container/Container";
import { Input } from "../../components/input/Input";
import { Layout } from "../../components/layout/Layout";
import { useSnackbar } from "../../components/snackbar/SnackBarContext";
import { validateEmail } from "../../validators/EmailValidator";
import { validatePassword } from "../../validators/PasswordValidator";
import styles from "./Login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { openSnackbar } = useSnackbar();

  const SUCCESS_LOGIN_TEXT = "Login success";
  const INVALID_EMAIL_TEXT = "Invalid email format!";
  const INVALID_PASSWORD_TEXT = "Invalid password format!";

  const handleSubmit = async (e) => {
    if (!validateEmail(email)) {
      openSnackbar(INVALID_EMAIL_TEXT, "error");
    } else if (!validatePassword(password)) {
      openSnackbar(INVALID_PASSWORD_TEXT, "error");
    } else {
      e.preventDefault();
      let response = await signIn({ email, password });
      if (!response.error) {
        openSnackbar(SUCCESS_LOGIN_TEXT, "success");
        navigate("/");
      } else {
        openSnackbar(response.errorText, "error");
      }
    }
  };

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
            <Input
              placeholder={EMAIL_TEXT}
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.passwordInput}>
            <Input
              placeholder={PASSWORD_TEXT}
              type={type}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className={icon} onClick={handleChangeIcon} />
          </div>
          <div className={styles.buttons}>
            <div className={styles.buttonSignIn}>
              <Link to={"/register"}>
                <Button>Sign up</Button>
              </Link>
            </div>
            <div className={styles.buttonSignUp}>
              <Button onClick={handleSubmit}>Sign in</Button>
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
