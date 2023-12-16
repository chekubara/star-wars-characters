import React from "react";
import NavLink from "./NavLink";
import BrandLogo from "./BrandLogo";

const navLinks: { title: string; path: string }[] = [
  { title: "Home", path: "/" },
  { title: "Favorites", path: "/favorites" },
];

const Header = () => {
  return (
    <nav className="bg-background text-white">
      <div className="md:container max-md:px-4">
        <div className="flex h-[60px] justify-between items-center">
          <BrandLogo />
          <div className="flex space-x-4 h-full max-xs:hidden">
            {navLinks.map((link) => (
              <NavLink href={link.path} key={link.path}>
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
