import Logo from "@/assets/logo.png";
import LogoStroke from "@/assets/logo-stroke.png";

export const PATH = {
  PUBLIC_LAYOUT: "/",
  HOME: "",
  ABOUT_US: "about-us",
  OUR_AGENTS: "our-agents",
  PROPERTIES: "properties",
  SEARCH: "search",
};

export const NAV_LINKS = [
  { label: "HOME", link: `/${PATH.HOME}` },
  { label: "ABOUT US", link: `/${PATH.ABOUT_US}` },
  { label: "OUR AGENTS", link: `/${PATH.OUR_AGENTS}` },
  { label: "PROPERTIES", link: `/${PATH.PROPERTIES}` },
  { label: "SEARCH", link: `/${PATH.SEARCH}` },
];

export { Logo, LogoStroke };
