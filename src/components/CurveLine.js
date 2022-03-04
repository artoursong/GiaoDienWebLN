import React from "react";

const Line = () => {
  return (
    <svg
      width="0.875rem"
      height="1.625rem"
      viewBox="0 0 0.875 1.625"
      fill="none"
      className="absolute block overflow-visible"
      style={{ top: "2.5625rem", left: "1.5625rem" }}
    >
      <path
        d="
          M 0 0
          L 0 1.125
          A 0.5,0.5 0 0 0 0.5,1.625
          L 0.875,1.625
        "
        stroke="gray"
        strokeWidth="0.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default Line;
