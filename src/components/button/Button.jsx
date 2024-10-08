import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

const Button = ({
  type = "button",
  secondary = false,
  bgColor,
  fgColor,
  width,
  ...restProps
}) => {
  const composeClasses = classNames(
    styles.button,
    secondary ? styles.secondary : styles.primary,
  );

  const style = {
    backgroundColor: bgColor,
    color: fgColor,
    width,
  };

  return (
    <button
      className={composeClasses}
      type={type}
      style={style}
      {...restProps}
    />
  );
};

export default Button;
