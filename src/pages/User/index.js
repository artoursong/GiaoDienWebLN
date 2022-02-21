import { Outlet } from "react-router-dom";
import Container from "components/Container";
import SectionDivider from "components/Section/SectionDivider";
import PageHeader from "components/PageHeader";
import UserNav from "./components/UserNav";

const User = () => {
  return (
    <SectionDivider>
      <Container size="max-w-[1200px]">
        <PageHeader title="Trang cá nhân" />
        <div className="flex items-start gap-10">
          <div className="flex max-w-[220px] flex-1 flex-col gap-4">
            <UserNav />
          </div>
          <div className="w-full flex-1">
            <Outlet />
          </div>
        </div>
      </Container>
    </SectionDivider>
  );
};

export default User;
