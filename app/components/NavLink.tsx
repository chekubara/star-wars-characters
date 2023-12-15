"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: Props) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Link
      href={href}
      className={`hover:underline ${
        pathname === href ? "text-secondary" : ""
      }  `}
    >
      {children}
    </Link>
  );
};

NavLink.propTypes = {};

export default NavLink;
