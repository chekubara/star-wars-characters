import React from "react";
import Link from "next/link";

const BrandLogo = () => {
  return (
    <Link
      href="/"
      className="text-xl font-bold text-secondary hover:text-primary tracking-tighter"
    >
      StarWars Characters
    </Link>
  );
};

export default BrandLogo;
