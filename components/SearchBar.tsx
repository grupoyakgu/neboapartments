"use client";
import { useState } from "react";
import type { Locale, Messages } from "@/lib/i18n";

const today = () => new Date().toISOString().slice(0, 10);

export default function SearchBar({ locale, t, city }: { locale: Locale; t: Messages; city: string }) {
  const [checkin, setCheckin] = useState("");
  const s = t.search;
  return (
    <form className="searchbar" action={`/${locale}/apartments`} method="get">
      <label>
        <span>{s.where}</span>
        <select name="city" defaultValue="">
          <option value="">{s.allDest}</option>
          <option value={city}>{city}</option>
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
  );
}
