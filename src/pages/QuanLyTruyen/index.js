import React from "react";
import Container from "components/Container";
import PageHeader from "components/PageHeader";
import SectionDivider from "components/Section/SectionDivider";
import FormTaoTap from "./components/FormTaoTap";
import FormTaoChuong from "./components/FormTaoChuong";

const QuanLyTruyen = () => {
  return (
    <div>
      <Container>
        <div>
          <PageHeader title="Quản lý truyện" />
          <SectionDivider>
            <div className="grid grid-cols-[350px_minmax(900px,1000px)] items-start gap-20 pt-20">
              <div className="w-full rounded-md border border-gray-500 p-4">
                <ul className="text-[#cbdff3]">
                  <li className="before:mr-2 before:content-['•']">
                    <span className="inline-block py-2 text-lg font-semibold">
                      Volume 1
                    </span>
                    <ul className="relative left-[40px] flex list-inside flex-col gap-2">
                      <li className="before:content-['+']">Chap 1</li>
                      <li className="before:content-['+']">Chap 2</li>
                    </ul>
                  </li>
                  <li className="before:mr-2 before:content-['•']">
                    <span className="inline-block py-2 text-lg font-semibold">
                      Volume 2
                    </span>
                    <ul className="relative left-[40px] list-inside">
                      <li className="py-1 before:content-['+']">Chap 1</li>
                      <li className="py-1 before:content-['+']">Chap 2</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="w-full rounded-md border border-gray-500 p-4">
                <div>
                  {/* <FormTaoTap /> */}
                  <FormTaoChuong />
                </div>
              </div>
            </div>
          </SectionDivider>
        </div>
      </Container>
    </div>
  );
};

export default QuanLyTruyen;
