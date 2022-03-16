import SectionHeader from "components/Section/SectionHeader";
import SectionDivider from "components/Section/SectionDivider";

import React from "react";

const Description = ({ desc }) => {
  return (
    <SectionDivider>
      <div className="mb-4">
        <SectionHeader>Tóm tắt</SectionHeader>
      </div>

      <p className="text-lg leading-relaxed text-[#c9e1f8]">{desc}</p>
    </SectionDivider>
  );
};

export default Description;
