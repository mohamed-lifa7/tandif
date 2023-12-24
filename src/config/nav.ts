import { siteConfig } from "./site";

const navLinks = [
  {
    href: "booking",
    title: "حجز",
  },
  {
    href: "contact",
    title: "اتصل بنا",
  },
  {
    href: "services",
    title: "خدماتنا",
  },
  {
    href: "about",
    title: `عن ${siteConfig.applicationName}`,
  },
];
export { navLinks };
