import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./button.module.css";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, ...rest }: ButtonProps) => {
  return (
    <button
      className={clsx({
        [styles.button]: true,
        [className || styles.button]: true,
      })}
      {...rest}
    ></button>
  );
};

export default Button;
