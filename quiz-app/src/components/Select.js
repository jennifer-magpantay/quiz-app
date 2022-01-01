import React from "react";

export const Select = ({
  id,
  name,
  labelText,
  optionsRender,
  optionChange,
  caption,
}) => {
  function handleOptionChange({ target }) {
    const index = target.selectedIndex;
    const selectedElement = target.childNodes[index].value;

    if (optionChange) {
      optionChange(selectedElement);
    }
  }

 
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <select id={id} name={name} onChange={handleOptionChange}>
        <option value="">Any {name}</option>
        {/* map options */}
        {optionsRender &&
          optionsRender.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
      </select>
      <p className="caption">{caption}</p>
      <br />
    </>
  );
};
