import { Link, NavLink } from "react-router-dom";
import Button from "../ui/button";
import Logo from "@/assets/logo.png";
import { NAV_LINKS } from "@/utils/constant";
import { cn } from "@/utils/helper";
import withRouter from "@/hocs/withRouter";

const NavBar = withRouter(({ location }) => {
  return (
    <div className="fixed flex items-center justify-between w-full top-[85px] bg-transparent z-[50] px-[100px] py-[26px]">
      <Link to="/">
        <img src={Logo} alt="Logo" className="object-contain w-32" />
      </Link>
      <div
        className={cn("flex items-center gap-6 text-lg text-primary-100", {
          "text-gray-700 bg-white": location.pathname !== "/",
        })}
      >
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.label}
            to={link.link}
            className={({ isActive }) =>
              cn("transition-all ease-in duration-75 hover:text-primary-900", {
                "text-white font-medium": isActive,
                "text-gray-900 font-medium":
                  location.pathname !== "/" && isActive,
              })
            }
          >
            {link.label}
          </NavLink>
        ))}
        <Button
          onClick={() => {}}
          variant={location.pathname === "/" ? "secondary" : "primary"}
        >
          Add Listing
        </Button>
      </div>
    </div>
  );
});

export default NavBar;
