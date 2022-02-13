import Container from "components/Container";
import SectionDivider from "components/Section/SectionDivider";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
const User = () => {
  return (
    <SectionDivider>
      <Container>
        <div className="flex gap-10">
          <LeftSection />
          <RightSection />
        </div>
      </Container>
    </SectionDivider>
  );
};

export default User;
