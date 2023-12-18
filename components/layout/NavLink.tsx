"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`h-full px-4 flex items-center font-medium hover:bg-secondary hover:text-background ${
        isActive ? "text-secondary" : "border-transparent"
      }`}
    >
      {children}
    </Link>
  );
};

NavLink.propTypes = {};

export default NavLink;
