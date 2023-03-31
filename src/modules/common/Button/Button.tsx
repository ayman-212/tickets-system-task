import React from "react";

import styles from "./Button.module.scss";

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type={props.type || "button"}
      className={`${styles.Button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <span>{props.title}</span>
    </button>
  );
};

export default Button;
