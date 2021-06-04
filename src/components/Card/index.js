import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, children, centered }) => {
  return (
    <div className={`shadow ${styles.card} ${centered ? styles.centered : ""}`}>
      {title && <div className={styles.cardTitle}>{title}</div>}
      {children}
    </div>
  );
};

export default Card;
