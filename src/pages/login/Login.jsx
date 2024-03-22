import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../api/auth/signin/request";
import { Button } from "../../components/button/Button";
import { Container } from "../../components/container/Container";
import { Input } from "../../components/input/Input";
import { Layout } from "../../components/layout/Layout";
import { SnackBar } from "../../components/snackbar/SnackBar";
import styles from "./Login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await signIn({ email, password });
    if (!response.error) {
      setSnackBarMessage("Successful login");
      setSeverity("success");
      handleSnackbarOpen();
      navigate("/");
    } else {
      setSnackBarMessage(response.errorText);
      setSeverity("error");
      handleSnackbarOpen();
    }
  };

  const [icon, setIcon] = useState("bx bx-show bx-tada-hover");
  const [type, setType] = useState("password");
  const [openSnackbar, setOpenSnackbar] = useState(false);

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

  const handleSnackbarOpen = () => {
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
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
      <SnackBar
        open={openSnackbar}
        handleClose={handleSnackbarClose}
        text={snackBarMessage}
        severity={severity}
      />
    </Container>
  );
};
