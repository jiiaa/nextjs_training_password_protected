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
import { delaGothicOne } from "@/app/ui/fonts";

const Home = HomeIcon;

const links = [
  { name: "Alpit", href: "/protected/alps", icon: ChevronDoubleUpIcon },
  { name: "Saari", href: "/protected/island", icon: CloudIcon },
  { name: "Hiekka", href: "/protected/sand", icon: SunIcon },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row justify-between items-end py-5 max-sm:px-8">
      <div
        className={`${delaGothicOne.className} antialiased grow text-2xl uppercase`}
      >
        <Link href="/">
          <Home
            className={clsx(
              "w-9 block md:hidden max-sm:border-b-2 max-sm:border-solid max-sm:border-my-blue max-sm:hover:border-b-2 max-sm:hover:border-solid max-sm:hover:border-my-orange",
              {
                "stroke-white": pathname === "/",
                "stroke-my-orange": pathname !== "/",
              },
            )}
          />
          <p
            className={clsx(
              "hidden md:inline-block py-1 max-sm:px-2 hover:bg-my-orange hover:text-black",
              {
                "text-white": pathname === "/",
                "text-my-orange": pathname !== "/",
              },
            )}
          >
            VowDanger Group
          </p>
        </Link>
      </div>
      <div className="flex flex-row grow justify-around">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <div
              key={link.name}
              className={clsx("mr-8 last-of-type:mr-0 text-xl", {
                "": pathname === link.href,
                "border-b-2 border-solid border-my-blue hover:border-b-2 hover:border-solid hover:border-my-orange focus:border-b-2 focus:border-solid focus:border-my-orange":
                  pathname !== link.href,
              })}
            >
              <Link
                href={link.href}
                className={clsx({
                  "cursor-default": pathname === link.href,
                  "cursor-pointer": pathname !== link.href,
                })}
              >
                <LinkIcon
                  className={clsx("w-9 m-auto", {
                    "stroke-white": pathname === link.href,
                    "stroke-my-orange": pathname !== link.href,
                  })}
                />
                <p
                  className={clsx("hidden md:block ", {
                    "text-white": pathname === link.href,
                    "text-my-orange": pathname !== link.href,
                  })}
                >
                  {link.name}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
