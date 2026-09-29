"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import type { Locale, Messages } from "@/lib/i18n";

// Phone menu: same links as the desktop nav, opened from the hamburger button.
export default function MobileMenu({ locale, t }: { locale: Locale; t: Messages }) {
  const [open, setOpen] = useState(false);
  const n = t.nav;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => setOpen(false);
  const links: [string, string][] = [
    [n.apartments, `/${locale}/apartments`],
    [n.destinations, `/${locale}#destinations`],
    [n.business, "#"],
    [n.about, "#"],
    [n.help, `/${locale}#faq`],
    [n.owners, "#"],
  ];

  return (
    <>
      <button type="button" className="burger" aria-label={n.menu} aria-expanded={open} onClick={() => setOpen(true)}>
        <span /><span /><span />
      </button>
      {open && (
        <div className="mmenu" role="dialog" aria-modal="true" aria-label={n.menu}>
          <div className="container mmenu-bar">
            <a href={`/${locale}`} aria-label="NEBO Apartments" onClick={close}><Logo /></a>
            <button type="button" className="mmenu-close" aria-label={t.search.close} onClick={close}>×</button>
          </div>
          <nav className="container mmenu-nav" aria-label="Main">
            {links.map(([label, href]) => <a key={label} href={href} onClick={close}>{label}</a>)}
            <a className="btn btn-accent" href={`/${locale}/apartments`} onClick={close}>{n.book}</a>
          </nav>
        </div>
      )}
    </>
  );
}
