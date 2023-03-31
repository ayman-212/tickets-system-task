import React from "react";
import Header from "../components/Header";
import styles from "./Layout.module.scss";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <main className={styles.Main}>{children}</main>
    </div>
  );
};

export default Layout;
