import React from "react";
import Link from "next/link";

const BrandLogo = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-bold text-secondary hover:text-primary"
    >
      StarWars Characters
    </Link>
  );
};

export default BrandLogo;
