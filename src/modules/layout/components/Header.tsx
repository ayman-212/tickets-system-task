import React from "react";
import styles from "./Header.module.scss";
import logo from "../../../assets/planradar_logo.jpg";

const Header = () => {
  return (
    <header className={styles.Navbar}>
      <div>
        <img src={logo} />
      </div>
    </header>
  );
};

export default Header;
