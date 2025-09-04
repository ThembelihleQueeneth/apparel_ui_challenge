import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <p className={styles.attribution}>
      Bootcamp 2025 by{" "}
      <a href="https://www.mlab.co.za" target="_blank" rel="noreferrer">
        CodeTribe
      </a>
      . Developed by <a href="#">Thembelihle Maluka</a>.
    </p>
  );
}

export default Footer;
