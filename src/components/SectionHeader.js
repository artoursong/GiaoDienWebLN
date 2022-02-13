import React from "react";

const SectionHeader = ({ children }) => {
  return (
    <h2 className="text-2xl font-semibold uppercase text-[#cbdff3]">
      {children}
    </h2>
  );
};

export default SectionHeader;
