import React from "react";
import styles from "./PageHeading.module.css";

const PageHeading = ({ children }) => {
  return <h1 className={styles.heading}>{children}</h1>;
};

export default PageHeading;
