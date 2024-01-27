import styles from "./App.module.css";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Hero } from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { Project } from "./components/project/Project";
import { Technologies } from "./components/technologies/Technologies";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;