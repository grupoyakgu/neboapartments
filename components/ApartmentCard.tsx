import type { Apartment } from "@/lib/apartments";
import type { Locale, Messages } from "@/lib/i18n";

export default function ApartmentCard({ apt, locale, t, qs = "" }: { apt: Apartment; locale: Locale; t: Messages; qs?: string }) {
  const a = t.apts;
  return (
    <a className="card" href={`/${locale}/apartments/${apt.slug}${qs}`}>
      <div className="thumb"><img src={apt.images[0]} alt={apt.name} loading="lazy" /></div>
      <div className="card-body">
        <div className="muted">{apt.city}</div>
        <h3>{apt.name}</h3>
        <div className="muted">{apt.guests} {a.guests} · {apt.bedrooms} {a.bedrooms} · {apt.baths} {a.baths}</div>
        <div className="price"><span className="muted">{a.from}</span> <strong>{apt.price} €</strong> / {a.night}</div>
      </div>
    </a>
  );
}
