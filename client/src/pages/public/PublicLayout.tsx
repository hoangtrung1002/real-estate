import { NavBar, TopHeader } from "@/components";
import withRouter from "@/hocs/withRouter";
import { cn } from "@/utils/helper";
import { Outlet } from "react-router-dom";

const PublicLayout = withRouter(({ location }) => {
  return (
    <div>
      <TopHeader />
      <NavBar />
      <div className={cn("pt-0", { "pt-[232px]": location.pathname !== "/" })}>
        <Outlet />
      </div>
    </div>
  );
});

export default PublicLayout;
