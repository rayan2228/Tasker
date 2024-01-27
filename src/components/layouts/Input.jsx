import React from "react";

const Input = ({ label, type = "text", id = "", className, ...attributes }) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input className={className} type={type} id={id} {...attributes} />
    </>
  );
};

export default Input;
