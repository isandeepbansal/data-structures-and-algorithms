import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.headerTitle}>
        <img src={Logo} alt="logo" /> DS & Algorithms
      </Link>
    </header>
  );
};

export default Header;
