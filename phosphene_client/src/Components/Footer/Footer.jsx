import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footerSocial}>
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
      <div className = {styles.footerPersonal}>
        <h6> <i className ="fa fa-envelope"></i> Phosphenejewelry@gmail.com</h6>
        <h6><i class="fa fa-phone-square"></i> +374-99-43-39-31</h6>
      </div>
    </div>
  );
} 

export default Footer;
