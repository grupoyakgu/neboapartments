"use client";
import { useState } from "react";
import type { Messages } from "@/lib/i18n";

export default function Newsletter({ t }: { t: Messages }) {
  const [done, setDone] = useState(false);
  const n = t.newsletter;
  return (
    <form className="newsletter" onSubmit={(e) => { e.preventDefault(); setDone(true); /* TODO: connect to mailing provider */ }}>
      {done ? <p><strong>{n.thanks}</strong></p> : (
        <>
          <input type="email" required placeholder={n.placeholder} aria-label={n.placeholder} />
          <button className="btn btn-accent" type="submit">{n.button}</button>
        </>
      )}
    </form>
  );
}
