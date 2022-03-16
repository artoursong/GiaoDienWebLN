import React from "react";

const StraightLine = ({ top, left }) => {
  return (
    <div
      style={{ top: top, left: left }}
      className="absolute h-[14px] w-[2px] -translate-x-1/2 transform rounded bg-gray-500"
    ></div>
  );
};

export default StraightLine;
