import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="bg-background text-white p-4">
      <div className="container flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-secondary hover:text-primary"
        >
          StarWars Characters
        </Link>
        <div className="flex space-x-4">
          <Link href="/favorites" className="hover:underline">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
