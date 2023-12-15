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
      className={`h-full px-4 flex items-center hover:underline border-b-2 ${
        pathname === href
          ? "text-secondary border-secondary"
          : "border-transparent"
      }  `}
    >
      {children}
    </Link>
  );
};

NavLink.propTypes = {};

export default NavLink;
