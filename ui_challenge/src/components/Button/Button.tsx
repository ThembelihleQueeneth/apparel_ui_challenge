import React from "react";
import styles from "./Button.module.css"

type ButtonProps = {
    text:string;
    onClick: () => void;
};

function CustomButton({ text, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}
export default CustomButton;