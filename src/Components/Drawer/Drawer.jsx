import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Drawer.module.css';
import { AiOutlineDashboard, AiOutlineExperiment, AiOutlineUser, AiOutlineBarChart, AiOutlineUserAdd, AiOutlineQuestionCircle } from 'react-icons/ai';

function Drawer() {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { name: 'dashboard', icon: AiOutlineDashboard, label: 'Dashboard', route: '/' },
    { name: 'trainings', icon: AiOutlineExperiment, label: 'Trainings', route: '/trainings' },
    { name: 'users', icon: AiOutlineUser, label: 'Users', route: '/users' },
    { name: 'analytics', icon: AiOutlineBarChart, label: 'Analytics', route: '/analytics' },
    { name: 'account', icon: AiOutlineUserAdd, label: 'My Account', route: '/account' },
    { name: 'support', icon: AiOutlineQuestionCircle, label: 'Support', route: '/support' }
  ];

  const handleItemClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className={styles.container}>
      <div className={styles.drawer}>
        {sections.map(({ name, icon: Icon, label, route }) => (
          <NavLink
            key={name}
            to={route}
            activeClassName={styles.activeItem}
            className={`${styles.item} ${activeSection === name ? styles.active : ''}`}
            onClick={() => handleItemClick(name)}
          >
            <Icon className={styles.icon} />
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Drawer;
