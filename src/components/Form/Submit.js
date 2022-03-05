import React from "react";

const Submit = ({ disabled, children }) => {
  return (
    <button
      className="rounded-md bg-indigo-600 px-8 py-2 font-semibold text-white transition-all hover:bg-indigo-700 disabled:pointer-events-none disabled:opacity-60"
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Submit;
