"use client";

import { useEffect, useState } from "react";
import { FacebookLogo, List, MagnifyingGlass, Moon, Sun, X, YoutubeLogo } from "@phosphor-icons/react";
import { navItems } from "@/lib/news-data";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <header className="site-header">
      <div className="masthead">
        <a className="brand" href="#" aria-label="Joy Online home">
          <span>Joy</span>
          <strong>Online</strong>
        </a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="primary-nav">
          {menuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          <span className="sr-only">Toggle navigation</span>
        </button>
        <nav id="primary-nav" className={menuOpen ? "primary-nav is-open" : "primary-nav"} aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <a className={index === 0 ? "is-active" : undefined} href="#" key={item}>
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button type="button" aria-label="Search">
            <MagnifyingGlass size={21} weight="bold" />
          </button>
          <button type="button" aria-label="Watch on YouTube">
            <YoutubeLogo size={21} weight="fill" />
          </button>
          <button type="button" aria-label="Open Facebook">
            <FacebookLogo size={21} weight="fill" />
          </button>
          <button type="button" onClick={() => setDark((value) => !value)} aria-label="Toggle dark mode">
            {dark ? <Sun size={21} weight="bold" /> : <Moon size={21} weight="bold" />}
          </button>
        </div>
      </div>
    </header>
  );
}
