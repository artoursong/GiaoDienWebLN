import React from "react";

const Input = ({
  value,
  onChange,
  onBlur,
  disabled = false,
  error,
  isError,
  name,
  type = "text",
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`mb-1 mt-1 block w-full rounded-md border bg-[#314053] px-4 py-2 text-white disabled:bg-gray-800 ${
          isError ? "border-red-500" : "border-transparent"
        }`}
        autoComplete="off"
        onBlur={onBlur}
        disabled={disabled}
      />
      <>{isError ? error : null}</>
    </>
  );
};

export default Input;
