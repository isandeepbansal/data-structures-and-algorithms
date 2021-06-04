import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.headerTitle}>
        DS & Algorithms
      </Link>
    </header>
  );
};

export default Header;
