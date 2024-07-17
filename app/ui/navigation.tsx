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

const Home = HomeIcon;

const links = [
  { name: "Alpit", href: "/protected/alps", icon: ChevronDoubleUpIcon },
  { name: "Saari", href: "/protected/island", icon: CloudIcon },
  { name: "Hiekka", href: "/middleware-protected/sand", icon: SunIcon },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row items-center justify-between bg-black text-white py-5 px-8">
      <div className="grow text-3xl uppercase">
        <Link href="/">
          <Home className="w-9 stroke-white-400 block md:hidden max-sm:hover:border-b-2 max-sm:hover:border-solid max-sm:hover:border-white" />
          <p className="hidden md:inline-block border-2 border-solid border-white py-1 px-2">VowDanger Group</p>
        </Link>
      </div>
      <div className="flex flex-row grow justify-start">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <div key={link.name} className="pr-8 last-of-type:pr-0 text-2xl">
              <Link href={link.href} className="">
                <LinkIcon className="w-9 stroke-white-400 m-auto max-sm:hover:border-b-2 max-sm:hover:border-solid max-sm:hover:border-white" />
                <p className="hidden md:block border-b-2 border-solid border-black hover:border-b-2 hover:border-solid hover:border-white">{link.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
