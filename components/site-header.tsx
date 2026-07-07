"use client";

import { useState } from "react";
import { FacebookLogo, List, MagnifyingGlass, Moon, Sun, X, YoutubeLogo } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/news-data";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "joy-theme";

function readSavedTheme(): Theme {
  const activeTheme = document.documentElement.dataset.theme;

  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }
  } catch {
    return activeTheme === "dark" ? "dark" : "light";
  }

  return activeTheme === "dark" ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {}
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => (typeof document === "undefined" ? "light" : readSavedTheme()));
  const pathname = usePathname();

  const dark = theme === "dark";

  function toggleTheme() {
    setTheme((currentTheme) => {
      const activeTheme = document.documentElement.dataset.theme === "dark" ? "dark" : currentTheme;
      const nextTheme = activeTheme === "dark" ? "light" : "dark";

      applyTheme(nextTheme);
      return nextTheme;
    });
  }

  return (
    <header className="site-header">
      <div className="masthead">
        <Link className="brand" href="/" aria-label="Joy Online home" onClick={() => setMenuOpen(false)}>
          <span>Joy</span>
          <strong>Online</strong>
        </Link>
        <button className="menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="primary-nav">
          {menuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          <span className="sr-only">Toggle navigation</span>
        </button>
        <nav id="primary-nav" className={menuOpen ? "primary-nav is-open" : "primary-nav"} aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link className={pathname === item.href ? "is-active" : undefined} href={item.href} key={item.label} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href="/search" aria-label="Search">
            <MagnifyingGlass size={21} weight="bold" />
          </Link>
          <a href="https://www.youtube.com/@JoyNewsOnTV" target="_blank" rel="noreferrer" aria-label="Watch on YouTube">
            <YoutubeLogo size={21} weight="fill" />
          </a>
          <a href="https://www.facebook.com/JoyNewsOnTV" target="_blank" rel="noreferrer" aria-label="Open Facebook">
            <FacebookLogo size={21} weight="fill" />
          </a>
          <button type="button" onClick={toggleTheme} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>
            {dark ? <Sun size={21} weight="bold" /> : <Moon size={21} weight="bold" />}
          </button>
        </div>
      </div>
    </header>
  );
}
