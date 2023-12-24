"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/config/nav";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mx-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.applicationName}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {navLinks.map((nav) => (
          <Link
            key={nav.href}
            href={`/${nav.href}`}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/docs/components")
                ? "text-foreground"
                : "text-foreground/60",
            )}
          >
            {nav.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
