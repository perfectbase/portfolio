"use client";

import Link from "next/link";
import { type Section } from "../page";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "./language-selector";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header({
  sections,
}: {
  sections: Omit<Section, "component">[];
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="md:container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <Button
            aria-label="Menu"
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
          <nav
            className={cn(
              "md:flex flex-col md:flex-row absolute md:relative left-0 right-0 top-14 md:top-0 bg-background md:bg-transparent p-4 md:p-0 gap-2 md:mx-auto h-screen md:h-auto",
              isMenuOpen ? "flex" : "hidden"
            )}
          >
            {sections.map((section) => (
              <Link key={section.id} href={`#${section.id}`}>
                <Button
                  variant="ghost"
                  className="text-sm font-medium w-full md:w-auto justify-start"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.navigation}
                </Button>
              </Link>
            ))}
            <div className="hidden md:block">
              <LanguageSelector />
            </div>
          </nav>
          <div className="md:hidden">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
}
