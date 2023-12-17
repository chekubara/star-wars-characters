"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HamburgerIcon from "../icons/HamburgerIcon";
import MenuPortal from "./MenuPortal";

interface Props {
  routes: { title: React.ReactNode; path: string }[];
}

const HamburgerMenu = ({ routes }: Props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <div className="xs:hidden">
      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        aria-label="Open Menu"
      >
        <HamburgerIcon />
      </button>
      <MenuPortal show={isMenuOpen} selector="menu-portal">
        <div className="fixed top-0 right-0 w-full h-screen bg-background text-white p-4 z-20">
          <div className="flex justify-end">
            <button
              type="button"
              className="rounded-full bg-secondary text-background font-bold text-xl w-8 h-8"
              onClick={() => setMenuOpen(false)}
              autoFocus
            >
              X
            </button>
          </div>
          <ul className="flex flex-col space-y-4 p-4">
            {routes.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`p-2 flex items-center font-medium ${
                    link.path === pathname
                      ? "text-secondary"
                      : "border-transparent"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </MenuPortal>
    </div>
  );
};

export default HamburgerMenu;
