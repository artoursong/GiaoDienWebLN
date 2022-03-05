import React from "react";

const Label = ({ htmlFor, className = null, children, size = "text-lg" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={className || `inline-block font-medium text-gray-300 ${size}`}
    >
      {children}
    </label>
  );
};

export default Label;
