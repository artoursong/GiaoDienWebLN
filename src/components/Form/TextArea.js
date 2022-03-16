import React from "react";

const TextArea = ({
  value,
  onChange,
  onBlur,
  disabled = false,
  error,
  isError,
  name,
  type = "text",
  rows = "10",
}) => {
  return (
    <>
      <textarea
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`mb-2 mt-1 block w-full rounded-md border bg-[#314053] px-4 py-2 text-white ${
          isError ? "border-red-500" : "border-transparent"
        }`}
        autoComplete="off"
        onBlur={onBlur}
        disabled={disabled}
        rows={rows}
      />
      <>{isError ? error : null}</>
    </>
  );
};

export default TextArea;
