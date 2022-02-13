import Container from "components/Container";
import SectionDivider from "components/Section/SectionDivider";
import Card from "components/Card";

const TruyenSangTac = () => {
  return (
    <div>
      <SectionDivider>
        <Container>
          <div className="mb-5 flex items-center gap-3">
            <div className="bg-black p-2 font-bold text-white">Sáng tác</div>
            <div className="font-bold">MỚI NHẤT</div>
          </div>
          <div className="flex flex-wrap gap-5">
            {new Array(6).fill("").map((_, index) => (
              <Card key={index} width="w-[calc(16.66%-16.66px)]" />
            ))}
          </div>
        </Container>
      </SectionDivider>
    </div>
  );
};

export default TruyenSangTac;
