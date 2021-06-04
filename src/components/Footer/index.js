import React from "react";
import styles from "./Footer.module.css";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.designedBy}>Site Designed by Sandeep Bansal</div>
      <div className={styles.socialLinks}>
        <AiFillGithub />
        <AiOutlineTwitter />
        <AiFillLinkedin />
      </div>
    </footer>
  );
};

export default Footer;
