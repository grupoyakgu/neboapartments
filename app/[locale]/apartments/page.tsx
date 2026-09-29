import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import ApartmentCard from "@/components/ApartmentCard";
import { apartments, brand } from "@/lib/apartments";
import { getMessages, isLocale } from "@/lib/i18n";

type SP = { city?: string; guests?: string; checkin?: string; checkout?: string };

export default async function Apartments({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<SP> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const sp = await searchParams;
  const t = getMessages(locale);
  const guests = Number(sp.guests) || 1;
  const list = apartments.filter((a) => a.guests >= guests && (!sp.city || a.city === sp.city));
  const qs = new URLSearchParams(Object.entries(sp).filter(([k, v]) => v && k !== "city") as [string, string][]).toString();

  return (
    <>
      <Header locale={locale} t={t} />
      <main className="container page">
        <h1>{t.apts.title}</h1>
        <SearchBar locale={locale} t={t} city={brand.city} />
        <div className="grid3 mt">
          {list.map((a) => <ApartmentCard key={a.slug} apt={a} locale={locale} t={t} qs={qs ? `?${qs}` : ""} />)}
        </div>
        {list.length === 0 && <p className="muted">{t.apts.none}</p>}
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
