import React from 'react';
import styles from "./Navbar.module.css";
import { FiMenu } from "react-icons/fi";

export default function Navbar({ name, summary, img }) {
  return (
    <nav className={`${styles.nav} ${styles.greenAnimation}`}>
      <div>
        <img src={img} alt="logo" />
      </div>
      <div>
        <h1>Hello, {name}</h1>
        <p>{summary}</p>
        <FiMenu />
      </div>
    </nav>
  );
}

