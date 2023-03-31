import React from "react";
import styles from "./Button.module.scss";

/**
 *
 * @param props the HTML Button props
 * @returns reusable button that we can use across the app
 */
const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { onClick, title, ...rest } = props;
  return (
    <button className={styles.Button} onClick={onClick} {...rest}>
      <span>{title}</span>
    </button>
  );
};

export default Button;
