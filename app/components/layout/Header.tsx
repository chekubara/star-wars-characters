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
    <nav className="bg-background text-white p-4">
      <div className="container flex justify-between items-center">
        <BrandLogo />
        <div className="flex space-x-4">
          {navLinks.map((link) => (
            <NavLink href={link.path} key={link.path}>
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
