import React from "react";
import Header from "components/Header";
import Footer from "components/Footer/Index";

const CommonLayout = ({ children }) => {
  return (
    <div className="relative w-full bg-[#0D213D]">
      <div className="relative z-50 flex min-h-screen flex-col">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default CommonLayout;
