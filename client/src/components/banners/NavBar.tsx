import withRouter from "@/hocs/withRouter";
import { useAppStore } from "@/store/useAppStore";
import { useUserStore } from "@/store/useUserStore";
import { Logo, LogoStroke, NAV_LINKS } from "@/utils/constant";
import { cn } from "@/utils/helper";
import { Link, NavLink } from "react-router-dom";
import Login from "../login/Login";
import Button from "../ui/button";

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
            className="px-4 py-6 text-lg"
            variant={location.pathname === "/" ? "outline" : "default"}
            onClick={() => setModal(true, <Login />)}
          >
            Sign in
          </Button>
        ) : (
          <Button
            className="px-4 py-6 text-lg"
            onClick={() => {}}
            variant={location.pathname === "/" ? "outline" : "default"}
          >
            Add Listing
          </Button>
        )}
      </div>
    </div>
  );
});

export default NavBar;
