import React from "react";

const PageHeader = ({ title }) => {
  return (
    <h1 className="mb-10 py-16 text-center text-5xl font-bold text-[#cbdff3]">
      {title}
    </h1>
  );
};

export default PageHeader;
