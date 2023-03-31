import React from "react";

import styles from "./Button.module.scss";

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { onClick, title, ...rest } = props;
  return (
    <button className={styles.Button} onClick={onClick} {...rest}>
      <span>{title}</span>
    </button>
  );
};

export default Button;
