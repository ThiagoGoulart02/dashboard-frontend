import styles from "./App.module.css";
import { Login } from "./pages/login/Login";

function App() {
  return (
    <div className={styles.App}>
      <Login />
    </div>
  );
}

export default App;
