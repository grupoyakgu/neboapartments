"use client";
import { useEffect, useState } from "react";
import type { Locale, Messages } from "@/lib/i18n";

const today = () => new Date().toISOString().slice(0, 10);

// `collapsible`: on phones the form is hidden behind a button and opens as a bottom sheet (used in the hero).
export default function SearchBar({ locale, t, cities, collapsible = false }: { locale: Locale; t: Messages; cities: string[]; collapsible?: boolean }) {
  const [checkin, setCheckin] = useState("");
  const [open, setOpen] = useState(false);
  const s = t.search;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className={`search-wrap${collapsible ? " collapsible" : ""}${open ? " open" : ""}`}>
      {collapsible && (
        <button type="button" className="btn btn-accent search-trigger" onClick={() => setOpen(true)} aria-expanded={open}>
          {t.nav.book}
        </button>
      )}
      <div className="search-backdrop" onClick={() => setOpen(false)} />
      <form className="searchbar" action={`/${locale}/apartments`} method="get">
        <button type="button" className="search-close" aria-label={s.close} onClick={() => setOpen(false)}>×</button>
        <label>
          <span>{s.where}</span>
          <select name="city" defaultValue="">
            <option value="">{s.allDest}</option>
            {cities.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
        <label>
          <span>{s.checkin}</span>
          <input type="date" name="checkin" min={today()} value={checkin} onChange={(e) => setCheckin(e.target.value)} />
        </label>
        <label>
          <span>{s.checkout}</span>
          <input type="date" name="checkout" min={checkin || today()} />
        </label>
        <label>
          <span>{s.guests}</span>
          <select name="guests" defaultValue="2">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>{n === 1 ? s.guestsOne : s.guestsN.replace("{n}", String(n))}</option>
            ))}
          </select>
        </label>
        <button className="btn btn-accent" type="submit">{s.search}</button>
      </form>
    </div>
  );
}
