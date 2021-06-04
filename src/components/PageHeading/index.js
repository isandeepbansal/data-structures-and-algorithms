import React from "react";
import styles from "./PageHeading.module.css";

const PageHeading = ({ children }) => {
  return <div className={styles.heading}>{children}</div>;
};

export default PageHeading;
