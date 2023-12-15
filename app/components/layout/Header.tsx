import Link from "next/link";
import React from "react";
import NavLink from "@/app/components/NavLink";
import BrandLogo from "@/app/components/BrandLogo";

const navLinks: { title: string; path: string }[] = [
  { title: "Home", path: "/" },
  { title: "Favorites", path: "/favorites" },
];

const Header = () => {
  return (
    <nav className="bg-background text-white">
      <div className="container">
        <div className="flex h-[60px] justify-between items-center">
          <BrandLogo />
          <div className="flex space-x-4 h-full">
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
