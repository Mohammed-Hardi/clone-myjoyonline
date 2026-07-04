import Link from "next/link";
import { navItems, podcasts } from "@/lib/news-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <strong>Joy Online</strong>
          <p>Independent, fearless, and credible journalism for readers across Ghana and beyond.</p>
        </div>
        <nav aria-label="Footer navigation">
          {navItems.slice(1, 7).map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-programs">
          {podcasts.slice(0, 6).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
