"use client";

import React from "react";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b h-14 mb-5 px-5 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>

      <ul className="flex space-x-6">
        {links.map((item) => (
          <Link
            className={classNames({
              "text-zinc-900": currentPath === item.href,
              "text-zinc-500": currentPath !== item.href,
              "hover:text-zinc-800 transition-colors": true,
            })}
            key={item.href}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
