import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { apartments, getApartment } from "@/lib/apartments";
import { getMessages, isLocale, locales } from "@/lib/i18n";

export const generateStaticParams = () => locales.flatMap((locale) => apartments.map((a) => ({ locale, slug: a.slug })));

export default async function ApartmentPage({ params, searchParams }: { params: Promise<{ locale: string; slug: string }>; searchParams: Promise<Record<string, string | undefined>> }) {
  const { locale, slug } = await params;
  const apt = getApartment(slug);
  if (!isLocale(locale) || !apt) notFound();
  const sp = await searchParams;
  const t = getMessages(locale);

  return (
    <>
      <Header locale={locale} t={t} />
      <main className="container page">
        <div className="gallery">
          {apt.images.slice(0, 5).map((src, i) => <img key={i} src={src} alt={`${apt.name} ${i + 1}`} loading={i ? "lazy" : "eager"} />)}
        </div>
        <div className="detail">
          <div>
            <div className="muted">{apt.city}</div>
            <h1>{apt.name}</h1>
            <p className="muted">{apt.guests} {t.apts.guests} · {apt.bedrooms} {t.apts.bedrooms} · {apt.baths} {t.apts.baths}</p>
            <h3>{t.apts.description}</h3>
            <p>{apt.description[locale] ?? apt.description.es}</p>
            <h3>{t.apts.amenities}</h3>
            <ul className="amenities">{apt.amenities.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
          <aside>
            <h3>{t.book.title}</h3>
            <BookingForm t={t} slug={apt.slug} price={apt.price} maxGuests={apt.guests} locale={locale} initial={sp} />
          </aside>
        </div>
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
