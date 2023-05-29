import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <div className="container">
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink className={({ isActive }) => (isActive ? styles.activeLink : styles.link)} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.activeLink : styles.link)} to="/works">
            Works
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.activeLink : styles.link)} to="/products">
            Products
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.activeLink : styles.link)} to="/contacts">
            Contacts
          </NavLink>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}
