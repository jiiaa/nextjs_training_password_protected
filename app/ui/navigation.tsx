"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
  ChevronDoubleUpIcon,
  CloudIcon,
  HomeIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Alpit", href: "/protected/alps", icon: ChevronDoubleUpIcon },
  { name: "Saari", href: "/protected/island", icon: CloudIcon },
  { name: "Hiekka", href: "/middleware-protected/sand", icon: SunIcon },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link key={link.name} href={link.href}>
            <LinkIcon className="w-6 stroke-orange-400" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}
