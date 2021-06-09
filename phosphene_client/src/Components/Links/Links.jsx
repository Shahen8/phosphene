import React from "react";
import styles from "./Links.module.css";

function Links() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <a
          href="https://www.instagram.com/____phosphene__/"
          className={styles.instalink}
        >
          <i className="fa fa-instagram"></i>
        </a>

        <a
          to="https://www.facebook.com/Phosphenejewelry/"
          className={styles.fblink}
        >
          <i className="fa fa-facebook-square"></i>
        </a>
      </div>
    </div>
  );
}

export default Links;
