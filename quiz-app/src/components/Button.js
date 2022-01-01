import React from "react";

export const Button = ({ type, children, buttonClick }) => {
  function handleButtonClick() {
    if (buttonClick) {
      buttonClick();
    }
  }
  return (
    <button type={type} onClick={handleButtonClick}>
      {children}
    </button>
  );
};
