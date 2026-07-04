"use client";

import { useEffect, useState } from "react";
import { FacebookLogo, List, MagnifyingGlass, Moon, Sun, X, YoutubeLogo } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/news-data";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

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
          <button type="button" onClick={() => setDark((value) => !value)} aria-label="Toggle dark mode">
            {dark ? <Sun size={21} weight="bold" /> : <Moon size={21} weight="bold" />}
          </button>
        </div>
      </div>
    </header>
  );
}
