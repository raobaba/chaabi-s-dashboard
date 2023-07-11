// Drawer.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Drawer.module.css';
import { AiOutlineDashboard, AiOutlineExperiment, AiOutlineUser, AiOutlineBarChart, AiOutlineUserAdd, AiOutlineQuestionCircle } from 'react-icons/ai';

function Drawer() {
  return (
    <div className={styles.container}>
      <div className={styles.drawer}>
        <NavLink exact to="/" activeClassName={styles.activeItem} className={styles.item}>
          <AiOutlineDashboard className={styles.icon} />
          Dashboard
        </NavLink>
        <NavLink to="/trainings" activeClassName={styles.activeItem} className={styles.item}>
          <AiOutlineExperiment className={styles.icon} />
          Trainings
        </NavLink>
        <NavLink to="/users" activeClassName={styles.activeItem} className={styles.item}>
          <AiOutlineUser className={styles.icon} />
          Users
        </NavLink>
        <NavLink to="/analytics" activeClassName={styles.activeItem} className={styles.item}>
          <AiOutlineBarChart className={styles.icon} />
          Analytics
        </NavLink>
        <NavLink to="/account" activeClassName={styles.activeItem} className={styles.item}>
          <AiOutlineUserAdd className={styles.icon} />
          My Account
        </NavLink>
        <NavLink to="/support" activeClassName={styles.activeItem} className={styles.item}>
          <AiOutlineQuestionCircle className={styles.icon} />
          Support
        </NavLink>
      </div>
    </div>
  );
}

export default Drawer;
