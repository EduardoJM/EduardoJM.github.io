import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './outline-button.module.css';

export type OutlineButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const OutlineButton = ({ className, ...rest }: OutlineButtonProps) => {
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

export default OutlineButton;
