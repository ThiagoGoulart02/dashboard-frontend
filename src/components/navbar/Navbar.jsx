import React from 'react'
import styles from "./Navbar.module.css"

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Welcome</a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#technologies">Technologies</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
