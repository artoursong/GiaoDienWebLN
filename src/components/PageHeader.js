import React from "react";

const PageHeader = ({ title }) => {
  return (
    <div className="flex min-h-[inherit] w-full flex-col items-center justify-center">
      <h1 className="mb-10 text-5xl font-bold text-[#cbdff3]">{title}</h1>
    </div>
  );
};

export default PageHeader;
