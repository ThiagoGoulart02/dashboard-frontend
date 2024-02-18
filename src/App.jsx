import styles from "./App.module.css";
import { Login } from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard"

function App() {
  return (
    <div className={styles.App}>
      <Dashboard />      
    </div>
  );
}

export default App;
