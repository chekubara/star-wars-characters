import React from "react";
import NavLink from "./NavLink";
import BrandLogo from "./BrandLogo";

const navLinks: { title: string; path: string }[] = [
  { title: "Home", path: "/" },
  { title: "Favorites", path: "/favorites" },
];

const Header = () => {
  return (
    <footer className="bg-background text-white mt-4 p-4">
      <div className="md:container max-md:px-4 text-center">
        Copyright © 2023 | Kuba Franczuk
      </div>
    </footer>
  );
};

export default Header;
