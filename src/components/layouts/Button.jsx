import React from "react";

const Button = ({ className, children, ...attributes }) => {
  return (
    <button
      className={`rounded-md ${className} px-3.5 py-2.5 text-sm font-semibold`}
      {...attributes}
    >
      {children}
    </button>
  );
};

export default Button;
