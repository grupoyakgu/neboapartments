"use client";
import { useMemo, useState } from "react";
import type { Messages } from "@/lib/i18n";

type Props = { t: Messages; slug: string; price: number; maxGuests: number; locale: string; initial: { checkin?: string; checkout?: string; guests?: string } };

const today = () => new Date().toISOString().slice(0, 10);
const nightsBetween = (a: string, b: string) => (a && b ? Math.round((+new Date(b) - +new Date(a)) / 86400000) : 0);

export default function BookingForm({ t, slug, price, maxGuests, locale, initial }: Props) {
  const b = t.book;
  const [f, setF] = useState({
    checkin: initial.checkin ?? "", checkout: initial.checkout ?? "",
    guests: Math.min(Number(initial.guests) || 2, maxGuests),
    name: "", email: "", phone: "", notes: "",
  });
  const [state, setState] = useState<"idle" | "sending" | "error" | "invalid" | "done">("idle");
  const [ref, setRef] = useState("");
  const nights = useMemo(() => nightsBetween(f.checkin, f.checkout), [f.checkin, f.checkout]);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((p) => ({ ...p, [k]: k === "guests" ? Number(e.target.value) : e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (nights < 1) return setState("invalid");
    setState("sending");
    try {
      const res = await fetch("/api/booking", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...f, slug, locale }) });
      if (res.status === 400) return setState("invalid");
      if (!res.ok) throw new Error();
      setRef((await res.json()).reference);
      setState("done");
    } catch {
      setState("error");
    }
  }

  if (state === "done")
    return (
      <div className="booking success">
        <h3>{b.successTitle}</h3>
        <p>{b.successText.replace("{ref}", ref)}</p>
      </div>
    );

  return (
    <form className="booking" onSubmit={submit}>
      <div className="price"><strong>{price} €</strong> / {t.apts.night}</div>
      <div className="row2">
        <label><span>{b.checkin}</span><input type="date" required min={today()} value={f.checkin} onChange={set("checkin")} /></label>
        <label><span>{b.checkout}</span><input type="date" required min={f.checkin || today()} value={f.checkout} onChange={set("checkout")} /></label>
      </div>
      <label><span>{b.guests}</span>
        <select value={f.guests} onChange={set("guests")}>
          {Array.from({ length: maxGuests }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
      </label>
      <label><span>{b.name}</span><input required minLength={2} value={f.name} onChange={set("name")} autoComplete="name" /></label>
      <label><span>{b.email}</span><input type="email" required value={f.email} onChange={set("email")} autoComplete="email" /></label>
      <label><span>{b.phone}</span><input type="tel" required value={f.phone} onChange={set("phone")} autoComplete="tel" /></label>
      <label><span>{b.notes}</span><textarea rows={3} value={f.notes} onChange={set("notes")} /></label>
      {nights > 0 && (
        <div className="totals">
          <span>{price} € × {nights === 1 ? b.nightsOne : b.nights.replace("{n}", String(nights))}</span>
          <strong>{b.total}: {price * nights} €</strong>
        </div>
      )}
      {state === "invalid" && <p className="err">{b.invalid}</p>}
      {state === "error" && <p className="err">{b.error}</p>}
      <button className="btn btn-accent wide" disabled={state === "sending"}>{state === "sending" ? b.sending : b.cta}</button>
      <p className="muted small">{b.noPayment}</p>
    </form>
  );
}
