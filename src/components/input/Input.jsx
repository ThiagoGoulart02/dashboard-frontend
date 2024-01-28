import React from "react";
import styles from "./Input.module.css";

export const Input = ({ placeholder, type }) => {
  return <input placeholder={placeholder} type={type} />;
};
