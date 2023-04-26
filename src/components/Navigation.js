import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink className={({ isActive }) => (isActive ? styles.activeLink : styles.link)} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.activeLink : styles.link)} to="/works">
          Works
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.activeLink : styles.link)} to="/contacts">
          Contacts
        </NavLink>
      </nav>
    </header>
  );
}
