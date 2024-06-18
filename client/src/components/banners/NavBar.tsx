import withRouter from "@/hocs/withRouter";
import { Logo, LogoStroke, NAV_LINKS } from "@/utils/constant";
import { cn } from "@/utils/helper";
import { Link, NavLink } from "react-router-dom";
import Button from "../ui/button";
import { useUserStore } from "@/store/useUserStore";
import { useAppStore } from "@/store/useAppStore";
import Login from "../login/Login";

const NavBar = withRouter(({ location }) => {
  const token = useUserStore((state) => state.token);
  const setModal = useAppStore((state) => state.setShowModal);
  return (
    <div className="fixed flex items-center justify-between w-full top-[85px] bg-transparent z-[50] px-[100px] py-[26px]">
      <Link to="/">
        <img
          src={location.pathname === "/" ? Logo : LogoStroke}
          alt="Logo"
          className="object-contain w-32"
        />
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
        {!token ? (
          <Button
            variant={location.pathname === "/" ? "secondary" : "primary"}
            onClick={() => setModal(true, <Login />)}
          >
            Sign in
          </Button>
        ) : (
          <Button
            onClick={() => {}}
            variant={location.pathname === "/" ? "secondary" : "primary"}
          >
            Add Listing
          </Button>
        )}
      </div>
    </div>
  );
});

export default NavBar;
