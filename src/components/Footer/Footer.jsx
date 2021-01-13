import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { Favorite } from "@material-ui/icons";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={"container " + styles.layout}>
        <Link to="/" className={styles.logo}>
          Eventhut
        </Link>
        <div className={styles.navContainer}>
          <Link className={styles.navLinks} to="/login">
            Login
          </Link>
          <a
            href="https://www.linkedin.com/in/taran-arora/"
            className={styles.navLinks}
          >
            Contact
          </a>
          <a
            href="https://github.com/itstaranarora"
            className={styles.navLinks}
          >
            Github
          </a>
        </div>
        <span className={styles.credit}>
          Built with <Favorite style={{ margin: "0 10px" }} /> by Taran Arora
        </span>
      </div>
    </div>
  );
}

export default Footer;
