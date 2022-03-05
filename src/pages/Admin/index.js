import { Outlet } from "react-router-dom";

import Container from "components/Container";
import PageHeader from "components/PageHeader";
import SectionDivider from "components/Section/SectionDivider";

const AdminDashboard = () => {
  return (
    <SectionDivider>
      <Container>
        <div>
          <PageHeader title="Quản lý website" />
          <SectionDivider>
            <div>
              <Outlet />
            </div>
          </SectionDivider>
        </div>
      </Container>
    </SectionDivider>
  );
};

export default AdminDashboard;
