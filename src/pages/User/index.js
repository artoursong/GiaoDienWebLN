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
        <div className="grid grid-cols-[300px_minmax(900px,_1fr)] gap-5">
          <div className="flex flex-col gap-4 p-2">
            <UserNav />
          </div>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </Container>
    </SectionDivider>
  );
};

export default User;
