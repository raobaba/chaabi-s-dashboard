import React from 'react';
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`${styles.nav} ${styles.greenAnimation}`}>
      <div>
        <img src="https://www.chaabi.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FchaabiLogo.ae532a35.png&w=384&q=75" alt="" />
      </div>
      <div>
        <h1>Hello, Puneet Dhiman</h1>
        <p>Following Is Your Organization's Performance Summary</p>
      </div>
    </nav>
  );
}
