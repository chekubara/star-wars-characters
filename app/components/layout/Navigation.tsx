import React from "react";
import NavLink from "./NavLink";

interface Props {
  routes: { title: React.ReactNode; path: string }[];
}

const Navigation = ({ routes }: Props) => {
  return (
    <nav className="flex space-x-0 h-full max-xs:hidden">
      {routes.map((link) => (
        <NavLink href={link.path} key={link.path}>
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
