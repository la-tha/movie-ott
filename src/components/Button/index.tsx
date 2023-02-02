/** @format */

import React from "react";
import "./index.css";
interface Props {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type: any;
  dark?: string;
  disabled?: boolean;
}
const Button: React.FC<Props> = (props) => {
  const { label, dark } = props;
  return (
    <button
      className={`btn ${dark ? "btnPrimary" : "btnSecondary"}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
