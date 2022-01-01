import React from "react";

export const Input = ({
  type,
  id,
  name,
  value,
  labelText,
  inputChange,
  caption,
  ...props
}) => {
  function handleInputOnChange({ target }) {
    if (inputChange) {
      inputChange(target.value);
    }
  }
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleInputOnChange}
        {...props}
      />
      <p className="caption">{caption}</p>
      <br />
    </>
  );
};
