"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NAVIGATION_ROUTES } from "@/lib/Props/NavigationProps/navigation";
import { ModeToggle } from "../mode-toggle";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import { signOut } from "@/app/(auth)/logout/actions";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = usePathname();

  const authroutes = [
    "/login",
    "/signup",
    "/reset-password",
    "/update-password",
  ];

  // Skip navbar for auth routes
  if (authroutes.includes(router)) {
    return null;
  }

  return (
    <div className="col-span-12">
      <nav className="relative w-full py-4 bg-background border-b border-border flex items-center">
        {/* Logo or left-side content */}
        <div className="flex-grow">
          <h1 className="text-xl font-bold text-foreground">JournalMind</h1>
        </div>

        {/* Hamburger menu (mobile only) */}
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden flex items-center justify-center bg-background hover:bg-card dark:bg-background dark:hover:bg-card"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-5 w-5 text-foreground dark:text-foreground transition-transform duration-300"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>{menuOpen ? "Close menu" : "Open menu"}</title>
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                className="text-foreground"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5h14a1 1 0 100-2H3a1 1 0 100 2zm14 4H3a1 1 0 000 2h14a1 1 0 100-2zm0 6H3a1 1 0 000 2h14a1 1 0 100-2z"
                className="text-foreground"
              />
            )}
          </svg>
        </Button>

        {/* Navigation links + theme toggle */}
        <ul
          className={`
    flex-col sm:flex-row flex
    items-center gap-6
    absolute sm:static
    bg-background dark:bg-background
    w-full sm:w-auto
    left-0 top-full sm:top-auto
    border-b sm:border-none border-border
    transition-all duration-300 ease-in-out
    ${menuOpen ? "block" : "hidden"} sm:flex
  `}
        >
          {NAVIGATION_ROUTES.map((route) => (
            <li key={route.path} onClick={() => setMenuOpen(false)}>
              {route.name === "Login" ? (
                <form action={signOut}>
                  <button
                    type="submit"
                    className="block px-4 py-2 text-sm font-medium text-black dark:text-white hover:underline bg-transparent border-none cursor-pointer"
                  >
                    Logout
                  </button>
                </form>
              ) : (
                <Link
                  href={route.path}
                  className="block px-4 py-2 text-sm font-medium text-black dark:text-white hover:underline"
                >
                  {route.name}
                </Link>
              )}
            </li>
          ))}
          <li onClick={() => setMenuOpen(false)}>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </div>
  );
}
