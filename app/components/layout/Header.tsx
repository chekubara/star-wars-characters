import React from "react";
import dynamic from "next/dynamic";
import BrandLogo from "./BrandLogo";
import Navigation from "./Navigation";
import HamburgerMenu from "./HamburgerMenu";

const FavoritesLabel = dynamic(() => import("./FavoritesLabel"), {
  ssr: false,
  loading: () => <>My Favorites</>,
});

const navLinks: { title: React.ReactNode; path: string }[] = [
  { title: "Home", path: "/" },
  { title: <FavoritesLabel />, path: "/favorites" },
];

const Header = () => {
  return (
    <header className="bg-background text-white">
      <div className="md:container max-md:px-4">
        <div className="flex h-[60px] justify-between items-center">
          <BrandLogo />
          <Navigation routes={navLinks} />
          <HamburgerMenu routes={navLinks} />
        </div>
      </div>
    </header>
  );
};

export default Header;
