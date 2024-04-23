import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { SnackbarProvider } from "./components/snackbar/SnackBarContext";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { CodeVerification } from "./pages/forgot-password/code-verification/CodeVerification";
import { EmailConfirmation } from "./pages/forgot-password/email-confirmation/EmailConfirmation";
import { NewPassword } from "./pages/forgot-password/new-password/NewPassword";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";

function App() {
  return (
    <div className={styles.App}>
      <SnackbarProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/email-confirmation" element={<EmailConfirmation />} />
            <Route path="/code-verification" element={<CodeVerification />} />
            <Route path="/new-password" element={<NewPassword />} />
          </Routes>
        </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
