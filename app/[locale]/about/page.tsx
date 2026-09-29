import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { spaceImages } from "@/lib/apartments";
import { getMessages, isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const a = getMessages(locale).about;
  return { title: `${a.kicker} — ${a.title}`, description: a.p1 };
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getMessages(locale);
  const a = t.about;

  return (
    <>
      <Header locale={locale} t={t} />
      <main>
        <section className="about-hero">
          <div className="container">
            <span className="kicker">{a.kicker}</span>
            <h1>{a.title}</h1>
          </div>
        </section>

        <section className="container about-body">
          <div className="about-photo" style={{ backgroundImage: `url(${spaceImages[0]})` }} role="img" aria-label="NEBO" />
          <div className="about-text">
            <p className="lead">{a.p1}</p>
            <p>{a.p2}</p>
            <p>{a.p3}</p>
          </div>
        </section>

        <section className="container about-pillars">
          {a.pillars.map((p, i) => (
            <div key={p}><span className="num">0{i + 1}</span><h3>{p}</h3></div>
          ))}
        </section>

        <section className="about-closing">
          <div className="container center">
            <h2>{a.closing}</h2>
            <a className="btn btn-accent" href={`/${locale}/apartments`}>{a.cta}</a>
          </div>
        </section>
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
